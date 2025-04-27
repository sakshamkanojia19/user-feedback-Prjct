Assignment for company 

Feedback Management System
A simple and clean full-stack web application to submit and view feedbacks.
Built with React (Frontend) and a backend (Node.js/Express + MongoDB assumed).
Styled using TailwindCSS with a beautiful purple to pink gradient and an elegant side navigation.

✨ Features
Submit feedback (name, email, category, feedback message).

View all submitted feedback in a dashboard.

Filter feedbacks based on category (Suggestion, Bug Report, Feature Request).

Smooth and modern UI using TailwindCSS.

Side navigation to switch between Form and Dashboard easily.

🏗️ Project Structure
pgsql
Copy
Edit
/client
  └── src
      ├── App.jsx
      ├── components
      │    ├── FeedbackForm.jsx
      │    └── FeedbackDashboard.jsx
      └── index.js
/server
  └── server.js
  └── models
       └── Feedback.js
  └── routes
       └── feedbackRoutes.js
🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/feedback-management-system.git
cd feedback-management-system
⚙️ Setting up the Backend (Server)
Navigate to the server folder:

bash
Copy
Edit
cd server
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy
Edit
npm run dev
(Or use nodemon for auto-restart on changes.)

🌐 Setting up the Frontend (React App)
Open a new terminal and go to the client folder:

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend:

bash
Copy
Edit
npm run dev
By default, the frontend runs on http://localhost:5173.

🧪 How to Test the Project
Start both the backend (http://localhost:5000) and frontend (http://localhost:5173).

Open the frontend in your browser.

You will see a beautiful gradient background and a side navigation menu.

Submit Feedback:

Fill out the form (Name, Email, Feedback, Category) and click Submit.

You'll get an alert saying "Feedback Submitted!".

View Feedback Dashboard:

Click Feedback Dashboard from the side menu.

You can see all feedback entries listed.

Use the dropdown to filter feedback by category.

Check your MongoDB database to verify feedback entries are stored correctly.