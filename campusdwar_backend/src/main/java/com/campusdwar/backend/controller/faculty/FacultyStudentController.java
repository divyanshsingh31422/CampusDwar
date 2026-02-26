package com.campusdwar.backend.controller.faculty;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.campusdwar.backend.dto.FacultyStudentDto;
import com.campusdwar.backend.service.faculty.FacultyStudentService;

@RestController
@RequestMapping("/faculty/students")
@PreAuthorize("hasRole('FACULTY')")
public class FacultyStudentController {

    private final FacultyStudentService studentService;

    public FacultyStudentController(FacultyStudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<FacultyStudentDto> getAllStudents() {
        return studentService.getAllStudents();
    }
}
