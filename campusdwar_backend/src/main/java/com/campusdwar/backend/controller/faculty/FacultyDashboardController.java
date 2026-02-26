package com.campusdwar.backend.controller.faculty;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.dto.FacultyDashboardDto;
import com.campusdwar.backend.service.faculty.FacultyDashboardService;

@RestController
@RequestMapping("/faculty/dashboard")
@PreAuthorize("hasRole('FACULTY')")
public class FacultyDashboardController {

    private final FacultyDashboardService service;

    public FacultyDashboardController(FacultyDashboardService service) {
        this.service = service;
    }

    @GetMapping
    public FacultyDashboardDto getDashboard() {
        return service.getDashboardData();
    }
}
