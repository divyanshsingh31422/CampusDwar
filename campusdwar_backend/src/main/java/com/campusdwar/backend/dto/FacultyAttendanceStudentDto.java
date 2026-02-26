package com.campusdwar.backend.dto;

public class FacultyAttendanceStudentDto {

    private Long studentId;
    private String name;
    private String prn;
    private String rollNo;
    private boolean present;

    public FacultyAttendanceStudentDto(
            Long studentId,
            String name,
            String prn,
            String rollNo,
            boolean present
    ) {
        this.studentId = studentId;
        this.name = name;
        this.prn = prn;
        this.rollNo = rollNo;
        this.present = present;
    }

    public Long getStudentId() { return studentId; }
    public String getName() { return name; }
    public String getPrn() { return prn; }
    public String getRollNo() { return rollNo; }
    public boolean isPresent() { return present; }
    public void setPresent(boolean present) { this.present = present; }
}
