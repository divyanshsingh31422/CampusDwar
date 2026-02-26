package com.campusdwar.backend.controller.student;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.dto.FacultyListDto;
import com.campusdwar.backend.service.faculty.FacultyService;

@RestController
@RequestMapping("/student/faculties")
@PreAuthorize("hasRole('STUDENT')")
public class StudentFacultyController {

    private final FacultyService service;

    public StudentFacultyController(FacultyService service) {
        this.service = service;
    }

    @GetMapping
    public List<FacultyListDto> getAllFaculties() {
        return service.getAllFaculties();
    }
}
