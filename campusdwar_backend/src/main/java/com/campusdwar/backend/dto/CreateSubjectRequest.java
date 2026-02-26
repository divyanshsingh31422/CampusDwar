package com.campusdwar.backend.dto;

import jakarta.validation.constraints.*;

public class CreateSubjectRequest {

    @NotBlank(message = "Subject name is required")
    private String subjectName;

    @NotNull(message = "Semester is required")
    @Min(1)
    @Max(8)
    private Integer semester;

    @NotNull(message = "Faculty ID is required")
    private Long facultyId;

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Integer getSemester() {
		return semester;
	}

	public void setSemester(Integer semester) {
		this.semester = semester;
	}

	public Long getFacultyId() {
		return facultyId;
	}

	public void setFacultyId(Long facultyId) {
		this.facultyId = facultyId;
	}

    
    
    // getters & setters
}
