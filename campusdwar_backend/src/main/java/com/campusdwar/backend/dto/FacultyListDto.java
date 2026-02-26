package com.campusdwar.backend.dto;

public class FacultyListDto {

    private Long facultyId;
    private String name;
    private String department;
    private String email;
    private String phoneNo;

    public FacultyListDto(
            Long facultyId,
            String name,
            String department,
            String email,
            String phoneNo
    ) {
        this.facultyId = facultyId;
        this.name = name;
        this.department = department;
        this.email = email;
        this.phoneNo = phoneNo;
    }

    public Long getFacultyId() { return facultyId; }
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public String getEmail() { return email; }
    public String getPhoneNo() { return phoneNo; }
}
