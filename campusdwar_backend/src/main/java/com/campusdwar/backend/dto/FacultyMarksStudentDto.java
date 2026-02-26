package com.campusdwar.backend.dto;

public class FacultyMarksStudentDto {

    private Long studentId;
    private String name;
    private String prn;
    private String rollNo;
    private Integer internalMarks;
    private Integer externalMarks;

    public FacultyMarksStudentDto(
            Long studentId,
            String name,
            String prn,
            String rollNo,
            Integer internalMarks,
            Integer externalMarks
    ) {
        this.studentId = studentId;
        this.name = name;
        this.prn = prn;
        this.rollNo = rollNo;
        this.internalMarks = internalMarks;
        this.externalMarks = externalMarks;
    }

    public Long getStudentId() { return studentId; }
    public String getName() { return name; }
    public String getPrn() { return prn; }
    public String getRollNo() { return rollNo; }
    public Integer getInternalMarks() { return internalMarks; }
    public Integer getExternalMarks() { return externalMarks; }

    public void setInternalMarks(Integer internalMarks) {
        this.internalMarks = internalMarks;
    }
    public void setExternalMarks(Integer externalMarks) {
        this.externalMarks = externalMarks;
    }
}
