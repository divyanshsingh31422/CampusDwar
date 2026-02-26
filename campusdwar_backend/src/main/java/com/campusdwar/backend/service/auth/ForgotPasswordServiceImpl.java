package com.campusdwar.backend.service.auth;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.campusdwar.backend.entity.PasswordResetOtp;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.repository.PasswordResetOtpRepository;
import com.campusdwar.backend.repository.UserRepository;
import com.campusdwar.backend.service.common.EmailService;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService {

    private final UserRepository userRepository;
    private final PasswordResetOtpRepository otpRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    public ForgotPasswordServiceImpl(
            UserRepository userRepository,
            PasswordResetOtpRepository otpRepository,
            PasswordEncoder passwordEncoder,
            EmailService emailService) {

        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }

    @Override
    public void sendOtp(String email) {

        String normalizedEmail = email.trim().toLowerCase();

        User user = userRepository.findByEmailIgnoreCase(normalizedEmail)
                .orElseThrow(() -> new IllegalArgumentException("Email not registered"));

        otpRepository.deleteByEmail(normalizedEmail);

        String otp = String.valueOf(100000 + new Random().nextInt(900000));

        PasswordResetOtp entity = new PasswordResetOtp();
        entity.setEmail(normalizedEmail);
        entity.setOtp(otp);
        entity.setExpiryTime(LocalDateTime.now().plusMinutes(5));

        otpRepository.save(entity);

        // ✅ EMAIL + CONSOLE (BOTH)
        System.out.println("OTP (backup): " + otp);
        emailService.sendOtpEmail(normalizedEmail, otp);
    }

    @Override
    public void resetPassword(String email, String otp, String newPassword) {

        String normalizedEmail = email.trim().toLowerCase();

        PasswordResetOtp resetOtp = otpRepository
                .findByEmailAndOtp(normalizedEmail, otp)
                .orElseThrow(() -> new IllegalArgumentException("Invalid OTP"));

        if (resetOtp.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("OTP expired");
        }

        User user = userRepository.findByEmailIgnoreCase(normalizedEmail)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        // SAFE CLEANUP
        try {
            otpRepository.deleteByEmail(normalizedEmail);
        } catch (Exception e) {
            System.out.println("OTP cleanup failed (ignored)");
        }
    }
}
