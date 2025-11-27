# Committee Coordinator - VJTI

## 1. About The Project

**Committee Coordinator** is a web-based portal being built to manage and track the finances for all student-run committees at VJTI.

The goal is to create a single, centralized application where student treasurers can log expenses and sponsorships, and faculty advisors can verify and approve those transactions. This will provide a clear, accountable, and transparent financial system for every committee.

## 2. Planned Features

* **Role-Based Login:** Secure, admin-allotted logins for two distinct roles: "Student Treasurer" and "Faculty Advisor." No public sign-up or "forgot password" will be available.
* **Dynamic Dashboards:** Separate, dedicated dashboards for students and faculty, showing them only the tools and information they need.
* **Expense & Sponsorship Tracking:** Forms for students to submit all outgoing expenses (with receipts) and incoming sponsorships.
* **Faculty Verification:** A "Verification Queue" for faculty to approve or reject student submissions, creating a clear audit trail.
* **Public Information Portal:** A "front-end" that includes a directory of all committees, a list of faculty advisors, and a live announcements feed.

## 3. Tech Stack

* **Frontend:** React (with React Router and AOS for animations)
* **Backend:** Node.js & Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens) & bcrypt
