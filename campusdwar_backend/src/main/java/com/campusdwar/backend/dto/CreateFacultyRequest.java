package com.campusdwar.backend.dto;

import jakarta.validation.constraints.*;

public class CreateFacultyRequest {

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotBlank(message = "Faculty name is required")
    private String name;

    @NotBlank(message = "Department is required")
    private String department;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

    // getters & setters
    
    
}
