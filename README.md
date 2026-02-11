CampusDwar
📚 Description
The College ERP System is a comprehensive management tool designed to streamline and automate academic and administrative processes in colleges. It provides distinct roles for HODs (Heads of Departments), Professors, and Students, each with specific functionalities. The system is built using modern technologies with a robust backend and an interactive frontend, ensuring efficiency and user-friendliness.

🌟 Features
Frontend
Dynamic UI using React and TailwindCSS for a responsive and modern design.
Routing enabled by React Router for seamless navigation.
State Management using Redux to handle complex data interactions.
Charts and Analytics with ApexChart for visualization of academic and attendance data.
API Integration using Axios for smooth communication between frontend and backend.
Backend
Role-Based Access Control:
HOD: Full CRUD operations on Students, Professors, Subjects, Departments, Semesters, Notifications, and Class records.
Professor: Limited CRUD operations for student records, attendance, and notifications.
Student: Ability to view personal details, update personal information, and receive notifications.
MySQL Database: Efficient handling of numerical and relational data through MySQL Workbench.
Google Firebase:
Storage for student images.
Authentication for secure access.
Notification System: Personalized notifications for students and professors.
Email Integration: Flexible email services for bulk or individual messaging with attachments.
Attendance Tracking: Professors can save and retrieve attendance records.
Subject & Practical Management: CRUD operations for subjects, semesters, and practicals.
🛠️ Tech Stack
Frontend
React
React Router
Redux
Vite
TailwindCSS
Axios
ApexCharts
Backend
Java Spring Boot
Google Firebase
MySQL
🚀 How to Use
Roles and Functionalities
HOD

Manage Students, Professors, and Departments.
Handle CRUD operations for Subjects, Semesters, and Class Records.
Send bulk notifications and emails to faculty and students.
Professor

Add or update attendance records.
Send notifications to students.
View and manage student records.
Student

Update personal details.
View notifications and attendance records.
📋 Setup Instructions
Prerequisites
Ensure the following are installed on your system:

Node.js (v14 or above)
Java JDK (v11 or above)
MySQL Workbench
Firebase account for storage and authentication
Frontend Setup
Clone the repository:
git clone <repository-url>  
cd frontend  
Install dependencies:
npm install  
Start the development server:
npm run dev  
Access the application at http://localhost:3000.
Backend Setup
Clone the repository:

git clone <repository-url>  
cd backend  
Configure the application properties:

Update application.properties with your MySQL and Firebase credentials.
Build the project:

./mvnw clean install  
Run the server:

./mvnw spring-boot:run  
Database Setup
Create a database in MySQL Workbench:
CREATE DATABASE college_erp;  
Update the database credentials in application.properties.
The tables will be created automatically using JPA when you run the backend.
Firebase Setup
Create a Firebase project.
Enable Firestore and Storage.
Download the Firebase configuration file and place it in the backend project.
💡 Contribution
Feel free to fork this repository and submit pull requests for new features or bug fixes. Contributions are always welcome!

📧 Contact
For queries or support, contact [divyanshSingh@gmail.com].
