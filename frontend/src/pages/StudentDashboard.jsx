import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentDashboard.css';

const categories = [
  'Marketing & Printing', 'Technology & Hardware', 'Food & Refreshments',
  'Logistics & Travel', 'Guest & Speaker Fees', 'Other'
];

// --- Icons (Same as before) ---
const FundsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h21a.75.75 0 0 1 .75.75Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5v15m0 0a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v14.25a.75.75 0 0 1-.75.75Z" clipRule="evenodd" /></svg>;
const ExpensesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v14.25a.75.75 0 0 1-.75.75Z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" /></svg>;


function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('expense');
  
  // --- This is now REAL data ---
  const [expenses, setExpenses] = useState([]);
  const [funds, setFunds] = useState({ totalFunds: 0, totalExpenses: 0 });

  // --- Form State (Same as before) ---
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState('');
  const [receiptLink, setReceiptLink] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // --- NEW: Function to get the token ---
  const getToken = () => {
    return localStorage.getItem('token');
  };

  // --- NEW: Function to fetch expenses from the API ---
  const fetchExpenses = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };
      const { data } = await axios.get(
        'http://localhost:5000/api/transactions/my-transactions',
        config
      );
      setExpenses(data);
    } catch (err) {
      console.error('Error fetching expenses:', err);
      setError('Could not fetch expenses.');
    }
  };

  // --- NEW: Run this function when the page loads ---
  useEffect(() => {
    fetchExpenses();
  }, []);

  // --- NEW: This is the REAL submit function ---
  const handleSubmitExpense = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      };
      const expenseData = { title, amount, category, description, receiptLink };
      await axios.post(
        'http://localhost:5000/api/transactions',
        expenseData,
        config
      );

      setLoading(false);
      setSuccess('Expense submitted successfully!');
      setTitle(''); setAmount(''); setDescription(''); setReceiptLink('');
      fetchExpenses(); // Refresh the list!

    } catch (err) {
      setLoading(false);
      const message = err.response?.data?.message || 'Submission failed.';
      setError(message);
    }
  };

  // --- This function renders the correct history (updated) ---
  const renderHistory = () => {
    if (activeTab === 'expense') {
      return (
        <div className="card" style={{ marginTop: '2rem' }} data-aos="fade-up" data-aos-delay="300">
          <div className="card-header">
            <h2>My Expense History</h2>
          </div>
          <div className="card-body">
            <div className="expense-list">
              {expenses.length === 0 ? (
                <p>You have not submitted any expenses yet.</p>
              ) : (
                expenses.map((expense) => (
                  <div className="expense-item" key={expense._id}>
                    <div className="expense-item-info">
                      <h4>{expense.title}</h4>
                      <p>₹{expense.amount.toLocaleString('en-IN')}</p>
                    </div>
                    <span className={`status-badge ${expense.status === 'approved' ? 'status-approved' : expense.status === 'pending' ? 'status-pending' : 'status-rejected'}`}>
                      {expense.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === 'sponsorship') {
      return (
        <div className="card" style={{ marginTop: '2rem' }} data-aos="fade-up" data-aos-delay="300">
          <div className="card-header"><h2>My Sponsorship History</h2></div>
          <div className="card-body"><p>This feature is coming soon.</p></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="page-container">
      <div className="page-header" data-aos="fade-down">
        <h1>Student Dashboard</h1>
        <p>Welcome, Student Treasurer!</p>
      </div>

      {/* --- STAT CARDS (Still mock data) --- */}
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
            <h3>Total Expenses</h3>
            <p>₹22,000</p>
          </div>
        </div>
      </div>

      {/* --- TABBED INTERFACE --- */}
      <div className="card" data-aos="fade-up" data-aos-delay="200">
        <div className="dashboard-tabs">
          <button 
            className={`tab-button ${activeTab === 'expense' ? 'active' : ''}`}
            onClick={() => setActiveTab('expense')}
          >
            Log Expense
          </button>
          <button 
            className={`tab-button ${activeTab === 'sponsorship' ? 'active' : ''}`}
            onClick={() => setActiveTab('sponsorship')}
          >
            Log Sponsorship
          </button>
          <button 
            className={`tab-button ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
        </div>

        {/* --- TAB CONTENT --- */}
        <div className="tab-content">
          
          {/* --- Tab 1: Log Expense --- */}
          {activeTab === 'expense' && (
            <div className="form-container">
              <form onSubmit={handleSubmitExpense}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Banners for Techfest" required />
                </div>
                <div className="form-row">
                  <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="amount">Amount (in ₹)</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g., 1500" required />
                  </div>
                  <div className="form-group" style={{ flex: 2 }}>
                    <label htmlFor="category">Category</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                      {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g., 2 large flex banners from PrintShop." />
                </div>
                <div className="form-group">
                  <label htmlFor="receiptLink">Receipt / Proof Link</label>
                  <input type="text" id="receiptLink" value={receiptLink} onChange={(e) => setReceiptLink(e.target.value)} placeholder="Paste a Google Drive, Dropbox, or Imgur link" required />
                  <p className="form-hint">Please upload your receipt (image or PDF) to a service like Google Drive and paste the public link here.</p>
                </div>
                {success && <div className="form-success">{success}</div>}
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Expense'}
                </button>
              </form>
            </div>
          )}

          {/* --- Tab 2: Log Sponsorship (Placeholder) --- */}
          {activeTab === 'sponsorship' && (
            <div className="form-container">
              <h2>Log Sponsorship</h2>
              <p>This feature is coming soon.</p>
            </div>
          )}

          {/* --- Tab 3: Messages (Placeholder) --- */}
          {activeTab === 'messages' && (
            <div className="form-container">
              <h2>Messages</h2>
              <p>This will be the chat application with your faculty advisor.</p>
            </div>
          )}
        </div>
      </div>

      {/* --- "SUBMISSION HISTORY" (Now dynamic) --- */}
      {renderHistory()}

    </div>
  );
}

export default StudentDashboard;