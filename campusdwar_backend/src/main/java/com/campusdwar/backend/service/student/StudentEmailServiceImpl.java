package com.campusdwar.backend.service.student;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.ChangeEmailRequest;
import com.campusdwar.backend.entity.PasswordResetOtp;
import com.campusdwar.backend.entity.Student;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.repository.PasswordResetOtpRepository;
import com.campusdwar.backend.repository.StudentRepository;
import com.campusdwar.backend.repository.UserRepository;
import com.campusdwar.backend.service.common.EmailService;

import jakarta.transaction.Transactional;

@Service
public class StudentEmailServiceImpl implements StudentEmailService {

    private final UserRepository userRepo;
    private final StudentRepository studentRepo;
    private final PasswordResetOtpRepository otpRepo;
    private final EmailService emailService;

    public StudentEmailServiceImpl(
            UserRepository userRepo,
            StudentRepository studentRepo,
            PasswordResetOtpRepository otpRepo,
            EmailService emailService) {

        this.userRepo = userRepo;
        this.studentRepo = studentRepo;
        this.otpRepo = otpRepo;
        this.emailService = emailService;
    }
    @Override
    public void sendEmailChangeOtp(String newEmail) {

        String normalizedEmail = newEmail.trim().toLowerCase();

        otpRepo.deleteByEmail(normalizedEmail);

        String otp = String.valueOf(100000 + new Random().nextInt(900000));

        PasswordResetOtp entity = new PasswordResetOtp();
        entity.setEmail(normalizedEmail);
        entity.setOtp(otp);
        entity.setExpiryTime(LocalDateTime.now().plusMinutes(5));

        otpRepo.save(entity);
        emailService.sendOtpEmail(normalizedEmail, otp);
    }


    @Transactional
    @Override
    public void verifyOtpAndChangeEmail(String currentEmail, ChangeEmailRequest request) {

        String normalizedNewEmail = request.getNewEmail().trim().toLowerCase();
        String inputOtp = request.getOtp().trim();

        PasswordResetOtp otpEntity = otpRepo
                .findTopByEmailOrderByExpiryTimeDesc(normalizedNewEmail)
                .orElseThrow(() -> new RuntimeException("OTP not found"));

        // DEBUG (optional, remove later)
        System.out.println("DB OTP = [" + otpEntity.getOtp() + "]");
        System.out.println("INPUT OTP = [" + inputOtp + "]");

        if (!otpEntity.getOtp().equals(inputOtp)) {
            throw new RuntimeException("Invalid OTP");
        }

        if (otpEntity.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP expired");
        }

        User user = userRepo.findByEmailIgnoreCase(currentEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Student student = studentRepo.findByUserEmail(currentEmail)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        user.setEmail(normalizedNewEmail);
        student.setEmail(normalizedNewEmail);

        userRepo.save(user);
        studentRepo.save(student);

        otpRepo.deleteByEmail(normalizedNewEmail);
    }



}
