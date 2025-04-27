import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/feedback');
      setFeedbacks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const filteredFeedbacks = filter
    ? feedbacks.filter(fb => fb.category === filter)
    : feedbacks;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl">
      <h2 className="text-3xl mb-6 font-bold text-center text-purple-600">Feedback Dashboard</h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">All</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug Report">Bug Report</option>
        <option value="Feature Request">Feature Request</option>
      </select>

      <ul className="space-y-6">
        {filteredFeedbacks.map((fb) => (
          <li key={fb._id} className="border p-6 rounded-lg shadow-md bg-gray-50">
            <p><strong>Name:</strong> {fb.name}</p>
            <p><strong>Email:</strong> {fb.email}</p>
            <p><strong>Category:</strong> {fb.category}</p>
            <p><strong>Feedback:</strong> {fb.feedback}</p>
            <p className="text-gray-500 text-sm mt-2">{new Date(fb.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDashboard;
