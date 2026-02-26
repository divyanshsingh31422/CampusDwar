package com.campusdwar.backend.controller.student;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.dto.ChangeEmailRequest;
import com.campusdwar.backend.service.student.StudentEmailService;

@RestController
@RequestMapping("/student/email")
@PreAuthorize("hasRole('STUDENT')")
public class StudentEmailController {

    private final StudentEmailService service;

    public StudentEmailController(StudentEmailService service) {
        this.service = service;
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestParam String newEmail) {
        service.sendEmailChangeOtp(newEmail);
        return ResponseEntity.ok().build();
    }


    @PostMapping("/verify")
    public ResponseEntity<?> verifyOtp(
            @RequestBody ChangeEmailRequest request
    ) {
        String currentEmail = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        service.verifyOtpAndChangeEmail(currentEmail, request);
        return ResponseEntity.ok().build();
    }

}
