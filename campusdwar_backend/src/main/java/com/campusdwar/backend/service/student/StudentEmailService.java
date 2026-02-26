package com.campusdwar.backend.service.student;

import com.campusdwar.backend.dto.ChangeEmailRequest;

public interface StudentEmailService {
    void sendEmailChangeOtp(String newEmail);
    void verifyOtpAndChangeEmail(String currentEmail, ChangeEmailRequest request);
}
