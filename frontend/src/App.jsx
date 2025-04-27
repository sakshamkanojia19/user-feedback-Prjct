import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';

function App() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex">
      {/* Side Navigation */}
      <div className="w-64 bg-white p-6 flex flex-col shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">Feedback System</h1>
        <button
          onClick={() => setActiveTab('form')}
          className={`mb-4 py-2 px-4 rounded-lg font-semibold ${
            activeTab === 'form' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Submit Feedback
        </button>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`py-2 px-4 rounded-lg font-semibold ${
            activeTab === 'dashboard' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Feedback Dashboard
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-8">
        {activeTab === 'form' ? <FeedbackForm /> : <FeedbackDashboard />}
      </div>
    </div>
  );
}

export default App;
