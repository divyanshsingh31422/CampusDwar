package com.campusdwar.backend.controller.faculty;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.dto.FacultyMarksStudentDto;
import com.campusdwar.backend.dto.SaveMarksRequest;
import com.campusdwar.backend.service.faculty.FacultyMarksService;

@RestController
@RequestMapping("/faculty/marks")
@PreAuthorize("hasRole('FACULTY')")
public class FacultyMarksController {

    private final FacultyMarksService service;

    public FacultyMarksController(FacultyMarksService service) {
        this.service = service;
    }

    @GetMapping("/students")
    public List<FacultyMarksStudentDto> getStudents(
            @RequestParam String course,
            @RequestParam Long subjectId
    ) {
        return service.getStudents(course, subjectId);
    }

    @PostMapping
    public void save(@RequestBody SaveMarksRequest request) {
        service.saveMarks(request);
    }
}

