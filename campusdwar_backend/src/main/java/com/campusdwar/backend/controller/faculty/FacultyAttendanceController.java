package com.campusdwar.backend.controller.faculty;

import java.time.LocalDate;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.dto.FacultyAttendanceStudentDto;
import com.campusdwar.backend.dto.SaveAttendanceRequest;
import com.campusdwar.backend.entity.Subject;
import com.campusdwar.backend.service.faculty.FacultyAttendanceService;
@RestController
@RequestMapping("/faculty/attendance")
@PreAuthorize("hasRole('FACULTY')")
public class FacultyAttendanceController {

    private final FacultyAttendanceService service;

    public FacultyAttendanceController(FacultyAttendanceService service) {
        this.service = service;
    }

    @GetMapping("/courses")
    public List<String> getCourses() {
        return service.getCourses();
    }

    @GetMapping("/subjects")
    public List<Subject> getSubjects() {
        return service.getSubjects();
    }

    @GetMapping("/students")
    public List<FacultyAttendanceStudentDto> getStudents(
            @RequestParam String course,
            @RequestParam Long subjectId,
            @RequestParam LocalDate date
    ) {
        return service.getStudents(course, subjectId, date);
    }

    @PostMapping
    public void save(@RequestBody SaveAttendanceRequest request) {
        service.saveAttendance(request);
    }
}
