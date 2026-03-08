
CampusDwar
📚 Description
The College ERP System is a comprehensive management tool designed to streamline and automate academic and administrative processes in colleges. It provides distinct roles for HODs (Heads of Departments), Professors, and Students, each with specific functionalities. The system is built using modern technologies with a robust backend and an interactive frontend, ensuring efficiency and user-friendliness.

“CampusDwar is a three-tier web application with React on the frontend, Spring Boot on the backend, and MySQL as the database.
The frontend is a Single Page Application that uses React Router, Redux for state, and Axios for API calls. The backend is a REST API built using Spring Boot with role-based access control. All data is stored in MySQL, while media files are stored in Firebase.
The architecture follows clean separation: UI at frontend, business logic at backend, and persistence in database + cloud storage.”

                  ┌───────────────────────────┐
                  │       Browser / Client    │
                  │ (React UI + Redux Store)  │
                  └───────────────┬───────────┘
                                  ↓
           ┌─────────────────────────────────────────┐
           │             Frontend Layer              │
           │ (React.js + TailwindCSS + Axios API)    │
           └─────────────────────────────────────────┘
                                  ↓
           ┌─────────────────────────────────────────┐
           │           Backend Layer (API)           │
           │     Spring Boot REST Services           │
           │     Role Based Access Control (RBAC)    │
           └─────────────────────────────────────────┘
                                  ↓
           ┌─────────────────────────────┬───────────┐
           │      Database Layer         │  Firebase │
           │       MySQL (Relational)    │  Storage  │
           │      CRUD & Queries         │  & Image  │
           └─────────────────────────────┴───────────┘
===================== MAIN ENTITIES (Tables) =======================

Users,
Roles,
Students,
Faculty,
Subject,
Assignments,
Submissions,
Marks,
Feedback,
Leaves,
Documents,
Notifications,
Password_Reset

========================== ER Diagram ======================
<img width="1007" height="1342" alt="erDiagram" src="https://github.com/user-attachments/assets/6cba9440-9dd2-44b2-9ffd-3dc0ccff7f50" />

ROLES (role_id)
      |
      | 1
      |------< N
USERS (user_id, role_id)
      |
      | 1
      |------< 1
STUDENTS (student_id, user_id)

USERS
      |
      | 1
      |------< 1
FACULTY (faculty_id, user_id)

FACULTY
      |
      | 1
      |------< N
SUBJECT (subject_id, faculty_id)

SUBJECT
      |
      | 1
      |------< N
ASSIGNMENTS (assignment_id, subject_id)

ASSIGNMENTS
      |
      | 1
      |------< N
SUBMISSIONS (submission_id, assignment_id, student_id)

STUDENTS
      |
      | 1
      |------< N
MARKS (marks_id, student_id, subject_id)

STUDENTS
      |
      | 1
      |------< N
FEEDBACK (feedback_id, student_id, faculty_id)

USERS
      |
      | 1
      |------< N
LEAVES (leave_id, user_id)

USERS
      |
      | 1
      |------< N
DOCUMENTS (document_id, user_id)

USERS
      |
      | 1
      |------< N
NOTIFICATIONS (notification_id, user_id)

===================Project Flow – College Management System=============

1️⃣ User Authentication
User registers in the system.
Admin assigns a role (Admin / Faculty / Student).
User logs in.
Role-based dashboard is displayed.

2️⃣ Admin Flow
Admin creates student and faculty accounts.
Admin assigns roles.
Admin manages subjects.
Admin monitors overall system activities.

3️⃣ Faculty Flow
Faculty logs in.
Creates subjects.
Uploads assignments for students.
Reviews student submissions.
Assigns marks and provides feedback.
Sends notifications if required.

4️⃣ Student Flow
Student logs in.
Views enrolled subjects.
Downloads assignments.
Uploads assignment submissions.
Views marks and feedback.

5️⃣ Assignment Workflow (End-to-End)
Faculty creates assignment
→ Student submits assignment
→ Faculty evaluates
→ Marks stored in database
→ Student views result

6️⃣ Leave Management Flow
User applies for leave
→ Admin reviews request
→ Approves or rejects
→ Status updated in system

7️⃣ Document Management
User uploads documents
→ Stored securely in database
→ Accessible when required

8️⃣ Password Reset Flow
User requests password reset
→ OTP sent
→ User verifies OTP
→ Password updated

========================Role-based (Login)========================
<img width="829" height="567" alt="image" src="https://github.com/user-attachments/assets/88d45d75-f980-4327-9a85-7c53f68490eb" />
Admin Dashboard
<img width="1536" height="1024" alt="admin dashboard" src="https://github.com/user-attachments/assets/52c557cc-23e6-4b9d-a6b2-b3c678fa2408" />
Faculty Dashboard
<img width="1536" height="1024" alt="faculty dashboard" src="https://github.com/user-attachments/assets/47301953-1f0c-46cd-8343-667267cbcaeb" />
Student Dashboard
<img width="1536" height="1024" alt="student dashboard" src="https://github.com/user-attachments/assets/4eb72782-d1cd-4333-9245-e08766f5b6e6" />

<img width="1536" height="1024" alt="Assignment" src="https://github.com/user-attachments/assets/7f751834-9737-4058-a0e4-d35967ebfb50" />





