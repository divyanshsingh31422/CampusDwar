package com.campusdwar.backend.controller.faculty;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.campusdwar.backend.entity.Faculty;
import com.campusdwar.backend.service.faculty.FacultyService;

@RestController
@RequestMapping("/faculty")
@PreAuthorize("hasRole('FACULTY')")
public class FacultySelfController {

    private final FacultyService facultyService;

    public FacultySelfController(FacultyService facultyService) {
        this.facultyService = facultyService;
    }

    @GetMapping("/profile")
    public Faculty getMyProfile() {
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return facultyService.getMyProfile(email);
    }

}
