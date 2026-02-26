package com.campusdwar.backend.service.common;

public interface EmailService {
    void sendOtpEmail(String toEmail, String otp);
}
