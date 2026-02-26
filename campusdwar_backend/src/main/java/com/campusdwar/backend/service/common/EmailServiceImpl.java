package com.campusdwar.backend.service.common;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendOtpEmail(String toEmail, String otp) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("CampusDwar – Password Reset OTP");
            message.setText(
                "Your OTP for password reset is: " + otp +
                "\nThis OTP is valid for 5 minutes.\n\nDo not share this OTP."
            );

            mailSender.send(message);
        } catch (Exception e) {
            // 🔒 MOST IMPORTANT LINE
            System.out.println("EMAIL FAILED (ignored): " + e.getMessage());
        }
    }
}
