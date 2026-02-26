package com.campusdwar.backend.controller.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.campusdwar.backend.service.auth.ForgotPasswordService;

@RestController
@RequestMapping("/auth")
public class ForgotPasswordController {

    private final ForgotPasswordService forgotPasswordService;

    public ForgotPasswordController(ForgotPasswordService forgotPasswordService) {
        this.forgotPasswordService = forgotPasswordService;
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<String> sendOtp(@RequestParam String email) {
        forgotPasswordService.sendOtp(email);
        return ResponseEntity.ok("OTP generated. OTP sent to email");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(
            @RequestParam String email,
            @RequestParam String otp,
            @RequestParam String newPassword) {

        forgotPasswordService.resetPassword(email, otp, newPassword);
        return ResponseEntity.ok("Password reset successful");
    }

}
