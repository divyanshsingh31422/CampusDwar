package com.campusdwar.backend.dto;

public class FacultyStudentDto {

    private Long studentId;
    private String name;
    private String prn;
    private String rollNo;
    private String course;
    private String email;
    private String contact;

    public FacultyStudentDto(
            Long studentId,
            String name,
            String prn,
            String rollNo,
            String course,
            String email,
            String contact
    ) {
        this.studentId = studentId;
        this.name = name;
        this.prn = prn;
        this.rollNo = rollNo;
        this.course = course;
        this.email = email;
        this.contact = contact;
    }

    /* getters */
    public Long getStudentId() { return studentId; }
    public String getName() { return name; }
    public String getPrn() { return prn; }
    public String getRollNo() { return rollNo; }
    public String getCourse() { return course; }
    public String getEmail() { return email; }
    public String getContact() { return contact; }
}
