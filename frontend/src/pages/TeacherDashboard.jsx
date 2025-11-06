import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TeacherDashboard.css'; // We will create this new file

// --- Icons (Same as student) ---
const FundsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h21a.75.75 0 0 1 .75.75Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5v15m0 0a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v14.25a.75.75 0 0 1-.75.75Z" clipRule="evenodd" /></svg>;
const ExpensesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v14.25a.75.75 0 0 1-.75.75Z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" /></svg>;


function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState('pending');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // --- 1. Get the token (same as student) ---
  const getToken = () => {
    return localStorage.getItem('token');
  };

  // --- 2. Fetch all transactions for this committee ---
  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };
      // --- Call our NEW teacher-only API route ---
      const { data } = await axios.get(
        'http://localhost:5000/api/transactions/committee',
        config
      );
      setTransactions(data);
    } catch (err) {
      console.error('Error fetching transactions:', err);
      setError('Could not fetch transactions.');
    } finally {
      setLoading(false);
    }
  };

  // --- 3. Run fetchTransactions on page load ---
  useEffect(() => {
    fetchTransactions();
  }, []);

  // --- 4. Handle the "Approve" or "Reject" click ---
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      };
      const body = { status: newStatus };
      
      // --- Call our NEW update API route ---
      await axios.put(
        `http://localhost:5000/api/transactions/${id}/status`,
        body,
        config
      );
      
      // --- 5. IT WORKED! Refresh the list ---
      // This will make the item disappear from the queue
      fetchTransactions(); 
      
    } catch (err) {
      console.error('Error updating status:', err);
      setError('Failed to update status.');
    }
  };

  // --- 6. Helper lists to render ---
  const pendingTransactions = transactions.filter(t => t.status === 'pending');
  const allOtherTransactions = transactions.filter(t => t.status !== 'pending');

  return (
    <div className="page-container">
      <div className="page-header" data-aos="fade-down">
        <h1>Faculty Dashboard</h1>
        <p>Welcome, Faculty Advisor! (Digital VJTI)</p>
      </div>

      {/* --- STAT CARDS (Mock data for now) --- */}
      <div className="stat-card-row" data-aos="fade-up">
        <div className="card stat-card">
          <div className="stat-icon green"><FundsIcon /></div>
          <div className="stat-info">
            <h3>Total Funds</h3>
            <p>₹50,000</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-icon red"><ExpensesIcon /></div>
          <div className="stat-info">
            <h3>Pending Approvals</h3>
            <p>{pendingTransactions.length} Items</p>
          </div>
        </div>
      </div>

      {/* --- TABBED INTERFACE (Uses global App.css styles) --- */}
      <div className="card" data-aos="fade-up" data-aos-delay="200">
        <div className="dashboard-tabs">
          <button
            className={`tab-button ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Verification Queue ({pendingTransactions.length})
          </button>
          <button
            className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            Full History
          </button>
        </div>

        {/* --- TAB CONTENT --- */}
        <div className="tab-content">
          
          {/* --- Tab 1: Verification Queue --- */}
          {activeTab === 'pending' && (
            <div className="transaction-table">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Receipt</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && <tr><td colSpan="5">Loading...</td></tr>}
                  {!loading && pendingTransactions.length === 0 && (
                    <tr><td colSpan="5">No pending expenses.</td></tr>
                  )}
                  {!loading && pendingTransactions.map(t => (
                    <tr key={t._id}>
                      {/* We can use t.user.username because we ".populate()"d it! */}
                      <td>{t.user.username}</td>
                      <td>{t.title}</td>
                      <td>₹{t.amount.toLocaleString('en-IN')}</td>
                      <td>
                        <a href={t.receiptLink} target="_blank" rel="noopener noreferrer">View Proof</a>
                      </td>
                      <td className="actions-cell">
                        <button 
                          className="btn-action btn-approve"
                          onClick={() => handleUpdateStatus(t._id, 'approved')}
                        >
                          Approve
                        </button>
                        <button 
                          className="btn-action btn-reject"
                          onClick={() => handleUpdateStatus(t._id, 'rejected')}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* --- Tab 2: Full History --- */}
          {activeTab === 'history' && (
            <div className="transaction-table">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && <tr><td colSpan="4">Loading...</td></tr>}
                  {!loading && allOtherTransactions.length === 0 && (
                    <tr><td colSpan="4">No approved or rejected expenses.</td></tr>
                  )}
                  {!loading && allOtherTransactions.map(t => (
                    <tr key={t._id}>
                      <td>{t.user.username}</td>
                      <td>{t.title}</td>
                      <td>₹{t.amount.toLocaleString('en-IN')}</td>
                      <td>
                        <span className={`status-badge ${t.status === 'approved' ? 'status-approved' : 'status-rejected'}`}>
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;