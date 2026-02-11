# Entity Relationship Diagrams

## 1. Detailed Schema (Crow's Foot Notation)
This diagram shows all tables, columns, and foreign key relationships.

```mermaid
erDiagram
    ROLE {
        int role_id PK
        string role_name
    }
    USER {
        int user_id PK
        boolean active
        string email
        string password
        string username
        int role_id FK
    }
    STUDENT {
        int student_id PK
        int user_id FK
        string name
        string prn
        string roll_no
        string email
        string department
        string course
        int semester
        string address
        string admission_type
        int admission_year
        string blood_group
        string category
        string city
        string contact
        date date_of_birth
        string emergency_contact_name
        string emergency_contact_number
        string father_email
        string father_mobile
        string father_name
        string gender
        string mother_name
        string pincode
        string state
        string status
        string tenth_board
        float tenth_percentage
        string twelfth_board
        float twelfth_percentage
    }
    FACULTY {
        int faculty_id PK
        int user_id FK
        string name
        string email
        string department
        string address
        string gender
        string phone_no
        string status
    }
    SUBJECT {
        int subject_id PK
        string subject_name
        int semester
        int faculty_id FK
    }
    ASSIGNMENT {
        int assignment_id PK
        string title
        string description
        date due_date
        int subject_id FK
    }
    SUBMISSION {
        int submission_id PK
        string file_path
        datetime submitted_at
        int assignment_id FK
        int student_id FK
    }
    ATTENDANCE {
        int attendance_id PK
        date date
        string status
        int student_id FK
        int subject_id FK
    }
    MARKS {
        int marks_id PK
        float external_marks
        float internal_marks
        float total
        int student_id FK
        int subject_id FK
    }
    FEEDBACK {
        int feedback_id PK
        string comments
        int rating
        int faculty_id FK
        int student_id FK
    }
    LEAVE {
        int leave_id PK
        date from_date
        date to_date
        string reason
        string status
        int user_id FK
    }
    NOTIFICATION {
        int notification_id PK
        string message
        datetime created_at
        int user_id FK
    }
    DOCUMENT {
        int document_id PK
        string file_name
        string file_path
        int user_id FK
    }
    OTP {
        int id PK
        string email
        datetime expiry_time
        string otp
    }

    ROLE ||--o{ USER : "assigned to"
    USER ||--o| STUDENT : "is a"
    USER ||--o| FACULTY : "is a"
    USER ||--o{ LEAVE : "requests"
    USER ||--o{ NOTIFICATION : "receives"
    USER ||--o{ DOCUMENT : "owns"
    
    FACULTY ||--o{ SUBJECT : "teaches"
    FACULTY ||--o{ FEEDBACK : "receives"
    
    SUBJECT ||--o{ ASSIGNMENT : "has"
    SUBJECT ||--o{ ATTENDANCE : "records"
    SUBJECT ||--o{ MARKS : "has"
    
    STUDENT ||--o{ SUBMISSION : "makes"
    STUDENT ||--o{ ATTENDANCE : "has"
    STUDENT ||--o{ MARKS : "earns"
    STUDENT ||--o{ FEEDBACK : "gives"
    
    ASSIGNMENT ||--o{ SUBMISSION : "receives"
```

## 2. Conceptual Diagram (Chen's Notation)
This diagram uses Rectangles (Entities), Diamonds (Relationships), and Circles (Attributes - key ones shown).

```mermaid
flowchart TD
    %% Entities (Rectangles)
    User[User]
    Student[Student]
    Faculty[Faculty]
    Subject[Subject]
    Assignment[Assignment]
    
    %% Relationships (Diamonds)
    IsA1{Is A}
    IsA2{Is A}
    Teaches{Teaches}
    EnrolledIn{Enrolled In}
    HasAssn{Has}
    Submits{Submits}

    %% Attributes (Circles/Ovals - using rounded rects or circles)
    attr_uid((user_id))
    attr_role((role))
    
    attr_sid((student_id))
    attr_sname((name))
    
    attr_fid((faculty_id))
    attr_fname((name))
    
    attr_subid((subject_id))
    attr_subname((name))
    
    attr_aid((assignment_id))
    attr_atitle((title))

    %% Connections
    User --- attr_uid
    User --- attr_role
    
    Student --- attr_sid
    Student --- attr_sname
    
    Faculty --- attr_fid
    Faculty --- attr_fname
    
    Subject --- attr_subid
    Subject --- attr_subname
    
    Assignment --- attr_aid
    Assignment --- attr_atitle

    %% Relationship Flows
    User --- IsA1 --- Student
    User --- IsA2 --- Faculty
    
    Faculty --- Teaches --- Subject
    Student --- EnrolledIn --- Subject
    Subject --- HasAssn --- Assignment
    Student --- Submits --- Assignment
    
    %% Styling for Chen Notation
    classDef entity fill:#f9f,stroke:#333,stroke-width:2px,shape:rect;
    classDef relationship fill:#ff9,stroke:#333,stroke-width:2px,shape:diamond;
    classDef attribute fill:#fff,stroke:#333,stroke-width:1px,shape:circle;

    class User,Student,Faculty,Subject,Assignment entity;
    class IsA1,IsA2,Teaches,EnrolledIn,HasAssn,Submits relationship;
    class attr_uid,attr_role,attr_sid,attr_sname,attr_fid,attr_fname,attr_subid,attr_subname,attr_aid,attr_atitle attribute;
```
