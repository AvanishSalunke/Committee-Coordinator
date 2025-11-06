const Transaction = require('../models/Transaction');

// --- createTransaction (Same as before) ---
const createTransaction = async (req, res) => {
  try {
    const { title, amount, category, description, receiptLink } = req.body;
    const transaction = new Transaction({
      title,
      amount: parseFloat(amount),
      category,
      description,
      receiptLink,
      user: req.user._id,
      committee: req.user.committee,
    });
    const createdTransaction = await transaction.save();
    res.status(201).json(createdTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// --- getStudentTransactions (Same as before) ---
const getStudentTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// --- 1. NEW FUNCTION for Teacher Queue ---
// @desc    Get all transactions for a teacher's committee
// @route   GET /api/transactions/committee
// @access  Private (Teacher only)
const getCommitteeTransactions = async (req, res) => {
  try {
    // 1. Find all transactions that match the teacher's committee
    const transactions = await Transaction.find({ committee: req.user.committee })
      .sort({ createdAt: -1 }) // Newest first
      // 2. This is the "magic": it replaces the 'user' ID
      //    with the user's actual document, but *only* their username.
      .populate('user', 'username'); 
      
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// --- 2. NEW FUNCTION for Approve/Reject ---
// @desc    Update a transaction's status
// @route   PUT /api/transactions/:id/status
// @access  Private (Teacher only)
const updateTransactionStatus = async (req, res) => {
  try {
    const { status } = req.body; // Get the new status ("approved" or "rejected")
    const transactionId = req.params.id; // Get the transaction's ID from the URL

    // 1. Find the transaction by its ID
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    // 2. Security Check!
    // Make sure this teacher is in the *same committee* as the transaction
    if (transaction.committee !== req.user.committee) {
      return res.status(401).json({ message: 'Not authorized for this committee' });
    }

    // 3. Update the status and save
    transaction.status = status;
    const updatedTransaction = await transaction.save();

    res.json(updatedTransaction);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createTransaction,
  getStudentTransactions,
  getCommitteeTransactions, // Export new function
  updateTransactionStatus,  // Export new function
};