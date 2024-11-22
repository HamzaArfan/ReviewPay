import React, { useState } from 'react';
import { 
  Wallet as WalletIcon, 
  CreditCard, 
  Download, 
  ArrowRight, 
  Send,
  PlusCircle,
} from 'lucide-react';
import logo from "./assets/images/loogfinal.png";

const WalletPage = () => {
  const [balance, setBalance] = useState(5420.75);
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-03-15', type: 'Deposit', amount: 1200.50, status: 'Completed' },
    { id: 2, date: '2024-03-10', type: 'Withdrawal', amount: 500.00, status: 'Completed' },
    { id: 3, date: '2024-03-05', type: 'Transfer', amount: 750.25, status: 'Completed' },
    { id: 4, date: '2024-02-28', type: 'Deposit', amount: 2500.00, status: 'Completed' },
    { id: 5, date: '2024-02-20', type: 'Withdrawal', amount: 1000.00, status: 'Completed' },
  ]);

  const [bankAccounts, setBankAccounts] = useState([]);
  const [showBankModal, setShowBankModal] = useState(false);
  const [newBankAccount, setNewBankAccount] = useState({
    bankName: '',
    accountNumber: '',
    accountType: ''
  });

  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleAddBankAccount = () => {
    if (newBankAccount.bankName && newBankAccount.accountNumber && newBankAccount.accountType) {
      setBankAccounts([...bankAccounts, {
        ...newBankAccount,
        id: Date.now()
      }]);
      setShowBankModal(false);
      setNewBankAccount({ bankName: '', accountNumber: '', accountType: '' });
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      setTransactions([
        {
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
          type: 'Withdrawal',
          amount: amount,
          status: 'Completed'
        },
        ...transactions
      ]);
      setShowWithdrawModal(false);
      setWithdrawAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-[#4D6F8F] pt-20 px-4">
      {/* Wallet Card */}
      <div 
        className="w-full max-w-md mx-auto rounded-2xl p-6 shadow-xl"
        style={{
          background: 'linear-gradient(105.41deg, #3DE9DC -17.48%, #889EE7 35.37%, #DC3DF7 99.28%)',
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <WalletIcon size={24} className="text-white" />
          <img 
            src={logo}
            alt="Company Logo" 
            className="h-8 w-10 rounded-full" 
          />
        </div>
        
        <div className="text-white">
          <p className="text-sm opacity-75 mb-2">Total Balance</p>
          <h2 className="text-3xl font-['GeneralSansBold']">${balance.toLocaleString()}</h2>
        </div>
        
        <button 
          onClick={() => setShowWithdrawModal(true)}
          className="w-full bg-[#0D182E] text-white py-3 rounded-lg mt-4 flex items-center justify-center space-x-2 hover:bg-white/30 transition"
        >
          <span>Withdraw</span>
        </button>
      </div>

      {/* Transactions Section */}
      <div className="mt-6 bg-[#0D182E] rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-['GeneralSansBold'] text-xl">Recent Transactions</h3>
          <button className="text-[#DB005F] flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight size={16} />
          </button>
        </div>
        {transactions.slice(0, 5).map(transaction => (
          <div 
            key={transaction.id} 
            className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0"
          >
            <div>
              <p className="text-white font-['GeneralSansMedium']">{transaction.type}</p>
              <p className="text-sm text-white/50">{transaction.date}</p>
            </div>
            <div className="text-right">
              <p className={`font-['GeneralSansBold'] ${
                transaction.type === 'Deposit' ? 'text-green-400' : 'text-white'
              }`}>
                {transaction.type === 'Deposit' ? '+' : '-'}${transaction.amount.toLocaleString()}
              </p>
              <p className="text-sm text-white/50">{transaction.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Payout Management Section */}
      <div className="mt-6 bg-[#0D182E] rounded-lg p-4">
        <h3 className="text-white font-['GeneralSansBold'] text-xl mb-4">Payout Management</h3>
        
        <div className="space-y-4">
          <button 
            className="w-full bg-[#DB005F] text-white py-3 rounded-lg flex items-center justify-between px-4 hover:bg-[#DB005F]/90 transition"
            onClick={() => {}}
          >
            <div className="flex items-center space-x-3">
              <CreditCard size={24} />
              <span>Manage Payment Methods</span>
            </div>
            <ArrowRight size={20} />
          </button>

          <button 
            className="w-full bg-[#DB005F] text-white py-3 rounded-lg flex items-center justify-between px-4 hover:bg-[#DB005F]/90 transition"
            onClick={() => {}}
          >
            <div className="flex items-center space-x-3">
              <Send size={24} />
              <span>Setup Automatic Payouts</span>
            </div>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Bank Accounts Section */}
      <div className="mt-6 bg-[#0D182E] rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-['GeneralSansBold'] text-xl">Bank Accounts</h3>
          <button 
            onClick={() => setShowBankModal(true)}
            className="text-[#DB005F] flex items-center space-x-1"
          >
            <PlusCircle size={20} />
            <span>Add Bank</span>
          </button>
        </div>
        {bankAccounts.map(account => (
          <div 
            key={account.id} 
            className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              <WalletIcon size={24} className="text-white/50" />
              <div>
                <p className="text-white font-['GeneralSansMedium']">{account.bankName}</p>
                <p className="text-sm text-white/50">
                  {account.accountType} • **** {account.accountNumber.slice(-4)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Bank Account Modal */}
      {showBankModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0D182E] rounded-lg p-6 w-full max-w-md">
            <h3 className="text-white font-['GeneralSansBold'] text-xl mb-4">Add Bank Account</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Bank Name"
                value={newBankAccount.bankName}
                onChange={(e) => setNewBankAccount({...newBankAccount, bankName: e.target.value})}
                className="w-full bg-[#4D6F8F] text-white p-3 rounded-lg"
              />
              <input 
                type="text" 
                placeholder="Account Number"
                value={newBankAccount.accountNumber}
                onChange={(e) => setNewBankAccount({...newBankAccount, accountNumber: e.target.value})}
                className="w-full bg-[#4D6F8F] text-white p-3 rounded-lg"
              />
              <select 
                value={newBankAccount.accountType}
                onChange={(e) => setNewBankAccount({...newBankAccount, accountType: e.target.value})}
                className="w-full bg-[#4D6F8F] text-white p-3 rounded-lg"
              >
                <option value="">Select Account Type</option>
                <option value="Checking">Checking</option>
                <option value="Savings">Savings</option>
              </select>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowBankModal(false)}
                  className="w-full bg-[#4D6F8F] text-white py-3 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddBankAccount}
                  className="w-full bg-[#DB005F] text-white py-3 rounded-lg"
                >
                  Add Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0D182E] rounded-lg p-6 w-full max-w-md">
            <h3 className="text-white font-['GeneralSansBold'] text-xl mb-4">Withdraw Funds</h3>
            <div className="space-y-4">
              <input 
                type="number" 
                placeholder="Enter Withdrawal Amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full bg-[#4D6F8F] text-white p-3 rounded-lg"
              />
              <p className="text-white/50 text-sm">Available Balance: ${balance.toLocaleString()}</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowWithdrawModal(false)}
                  className="w-full bg-[#4D6F8F] text-white py-3 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleWithdraw}
                  className="w-full bg-[#DB005F] text-white py-3 rounded-lg"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletPage;