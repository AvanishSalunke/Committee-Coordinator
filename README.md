# Committee Coordinator - VJTI

> **Note:** This project is currently in active development. The frontend is being built out, and the backend API is not yet connected. Features, UI, and database models are subject to change.

## 1. About The Project

**Committee Coordinator** is a centralized, web-based portal designed to manage and track the finances of student-run committees at VJTI.

This project aims to solve the complex challenge of tracking funds, expenses, and reimbursements in a fast-paced college environment. It provides a single source of truth for student treasurers and faculty advisors to ensure transparency, accountability, and streamlined financial operations for committees like Technovanza, SRA, Pratibimb, and more.

## 2. Core Features

### Frontend & Portal (In Progress)
* **Dynamic Welcome Page:** A modern, aesthetic landing page that serves as a portal to all committees.
* **Live Announcements:** A homepage feed showing the latest updates from the administration, with a dedicated page for all announcements.
* **Faculty Directory:** A public-facing page listing all faculty advisors and the committees they manage.
* **Interactive Committee Carousel:** A seamless, auto-playing, and infinite-loop carousel to select a committee.
* **Dynamic Login:** Separate, dynamically-generated login pages for each committee (e.g., `/login/technovanza`).

### Backend & Dashboard (Planned)
* **Role-Based Authentication:** Secure login for two distinct roles: "Student Treasurer" and "Faculty Advisor".
* **Expense & Sponsorship Logging:** A system for students to log all expenses (with proof) and all incoming sponsorships.
* **Reimbursement ("Splitwise") System:** A dedicated module for students to request reimbursements for personal funds spent on committee activities.
* **Faculty Verification:** A dashboard for teachers to "Verify" expenses, "Approve" reimbursements, and "Confirm" sponsorships, creating a clear audit trail.
* **Scalable Backend:** A MERN stack API designed to support adding new committees in the future with minimal code changes.

## 3. Tech Stack

This project is built on the **MERN** stack:

* **Frontend:** **React.js** (using Vite)
* **Backend:** **Node.js** & **Express.js**
* **Database:** **MongoDB**
* **Routing:** React Router
* **Authentication (Planned):** JSON Web Tokens (JWT)

## 4. Getting Started (Installation)

To run this project on your local machine, you will need to run **two** separate applications: the `backend` server and the `frontend` client.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or later)
* `npm` (comes with Node.js)
* `git` (for cloning the repository)

### Installation Steps

1.  **Clone the repository:**
    then go to the respective folder directory
  

2.  **Set up the Backend:**
    * Open a new terminal.
    * Navigate to the `backend` folder:
        ```bash
        cd backend
        ```
    * Install all required packages:
        ```bash
        npm install
        ```
    * (Once we build it, you will create a `.env` file here for your database keys.)
    * Start the backend server:
        ```bash
        npm run dev
        ```
    * The server will start (usually on `http://localhost:5000`).

3.  **Set up the Frontend:**
    * Open a **second, separate terminal**.
    * Navigate to the `frontend` folder:
        ```bash
        cd frontend
        ```
    * Install all required packages:
        ```bash
        npm install
        ```
    * Start the frontend React app:
        ```bash
        npm run dev
        ```
    * Vite will give you a local URL to open (usually `http://localhost:5173`).

4.  **You're all set!** Open the `http://localhost:5173` link in your browser to see the live application.