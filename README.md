# Exam Ace

<p align="center">
  <strong>A full-stack online test series platform for structured exam preparation.</strong>
</p>

<p align="center">
  <a href="https://exam-ace-three.vercel.app/">Live Application</a> ·
  <a href="https://github.com/mukul33265/quiz-app">Source Code</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Deployment-Vercel%20%7C%20Render-000000?logo=vercel&logoColor=white" alt="Deployment" />
</p>

---

## Overview

**Exam Ace** is a live online test series platform designed to help students practise through structured test series, timed assessments, and performance tracking. It provides a complete flow from user authentication and test access to automated evaluation and payment-enabled premium content.

The platform has been used by **100+ users** and has recorded **250+ test attempts**.

## Live Demo

- **Application:** [https://exam-ace-three.vercel.app/](https://exam-ace-three.vercel.app/)

> The backend may take a short time to respond if its hosting service has put it to sleep.

## Key Features

- **Authentication:** Sign in using Google OAuth, with JWT-based authentication for protected API requests.
- **Test series:** Browse and access organised test series and their test papers.
- **Timed assessments:** Attempt tests in a focused, time-bound test interface.
- **Automated evaluation:** Evaluate submitted answers, including correct, incorrect, and unattempted questions, marks, negative marking, percentage, and accuracy.
- **Performance tracking:** Review previous attempts and monitor test performance.
- **Leaderboards and analytics:** View performance insights and compare results.
- **PDF scorecards:** Generate downloadable scorecards for test results.
- **Premium purchases:** Purchase paid test series through Razorpay.
- **Payment verification:** Verify Razorpay payment signatures on the backend before recording a successful purchase.
- **Access control:** Protect authenticated routes and restrict premium test access based on purchase status.
- **Feedback:** Submit feedback through the platform.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, Vite, React Router, Tailwind CSS, Ant Design |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Authentication | Google OAuth, JSON Web Tokens (JWT) |
| Payments | Razorpay |
| HTTP Client | Axios |
| Notifications | React Hot Toast |
| Deployment | Vercel (frontend), Render (backend) |

## Architecture

Exam Ace follows a client–server architecture:

1. The React frontend handles navigation, authentication UI, test-taking, and result views.
2. The frontend communicates with the Express REST API using Axios.
3. Protected requests include a JWT in the `Authorization` header.
4. The backend applies authentication and purchase-access middleware before protected operations.
5. Mongoose models store users, test series, test papers, attempts, purchases, and feedback in MongoDB.
6. Razorpay handles checkout, while the backend verifies payment signatures before granting purchased access.

## Repository Structure

```text
quiz-app/
├── quiz-app-frontend/
│   ├── public/
│   ├── src/
│   │   ├── component/
│   │   ├── assets/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── quiz-app-backend/
│   ├── config/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm
- MongoDB database (local MongoDB or MongoDB Atlas)
- Google OAuth client credentials
- Razorpay API credentials (required for payment functionality)

### 1. Clone the repository

```bash
git clone https://github.com/mukul33265/quiz-app.git
cd quiz-app
```

### 2. Configure the backend

```bash
cd quiz-app-backend
npm install
```

Create a `.env` file inside `quiz-app-backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
RAZORPAY_API_KEY=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend:

```bash
npm start
```

The backend runs on `http://localhost:5000` by default.

### 3. Configure the frontend

Open a second terminal:

```bash
cd quiz-app-frontend
npm install
```

Create a `.env` file inside `quiz-app-frontend/`:

```env
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

**Local API configuration:** The current frontend API client points to the deployed backend URL in `src/api.js`. To use your local backend, change its Axios `baseURL` to `http://localhost:5000`.

Start the frontend:

```bash
npm run dev
```

Vite will print the local development URL in the terminal (usually `http://localhost:5173`).

## Environment Variables

Keep credentials private. Never commit real API keys, database connection strings, or JWT secrets.

| Variable | Location | Purpose |
|---|---|---|
| `PORT` | Backend | Port used by the Express server |
| `MONGO_URI` | Backend | MongoDB connection string |
| `JWT_SECRET` | Backend | Secret used to sign and verify JWTs |
| `GOOGLE_CLIENT_ID` | Backend | Google ID token verification |
| `RAZORPAY_API_KEY` | Backend | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | Backend | Razorpay secret for order/payment verification |
| `VITE_GOOGLE_CLIENT_ID` | Frontend | Google OAuth client ID |
| `VITE_RAZORPAY_KEY_ID` | Frontend | Razorpay checkout key ID |

Use test credentials while developing and configure the corresponding authorised origins and redirect settings in the Google and Razorpay dashboards.

## Important API Flows

The backend exposes REST endpoints for authentication, test series, test papers, attempts, results, purchases, and feedback.

Some key routes include:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/google` | Verify Google sign-in and issue a JWT |
| POST | `/submit` | Evaluate and save a test attempt |
| POST | `/create-order` | Create a Razorpay order |
| POST | `/verify-payment` | Verify payment signature and record purchase |

Protected routes require a valid JWT in the `Authorization: Bearer <token>` header. Refer to the route files in `quiz-app-backend/routes/` for the complete request and response details.

## Security Notes

- Store secrets in environment variables; do not hard-code credentials.
- Keep the Razorpay key secret on the backend only.
- Verify payment signatures on the server before granting paid access.
- Use JWT-protected routes for user-specific operations.
- Configure allowed frontend origins appropriately when deploying.

## Usage Metrics

- **100+** users
- **250+** test attempts

## Future Improvements

- Expand test analytics and progress visualisations.
- Add more configurable assessment options.
- Improve automated testing and API documentation.
- Continue refining the user experience based on student feedback.

## Contributing

This is a portfolio project. Suggestions and bug reports are welcome through GitHub Issues.

## Author

**Mukul Kumar**  
B.Tech, Computer Science and Engineering  
[GitHub](https://github.com/mukul33265) · [LinkedIn](https://www.linkedin.com/in/mukul-kumar-nitj)

---

<p align="center">
  If you find this project useful, consider giving the repository a star.
</p>
