package com.campusdwar.backend.service.auth;

public interface ForgotPasswordService {

    void sendOtp(String email);

    void resetPassword(String email, String otp, String newPassword);
}
