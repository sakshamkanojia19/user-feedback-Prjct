import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    category: 'Suggestion'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      alert('Feedback Submitted!');
      setFormData({ name: '', email: '', feedback: '', category: 'Suggestion' });
    } catch (error) {
      console.error(error);
      alert('Error submitting feedback');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
    >
      <h2 className="text-3xl mb-6 font-bold text-center text-purple-600">Submit Feedback</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />

      <textarea
        name="feedback"
        placeholder="Your Feedback"
        value={formData.feedback}
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="Suggestion">Suggestion</option>
        <option value="Bug Report">Bug Report</option>
        <option value="Feature Request">Feature Request</option>
      </select>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
