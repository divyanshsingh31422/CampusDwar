package com.campusdwar.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.campusdwar.backend.entity.PasswordResetOtp;

public interface PasswordResetOtpRepository
        extends JpaRepository<PasswordResetOtp, Long> {

    Optional<PasswordResetOtp> findByEmailAndOtp(String email, String otp);
    Optional<PasswordResetOtp> findTopByEmailOrderByExpiryTimeDesc(String email);

    void deleteByEmail(String email);
}
