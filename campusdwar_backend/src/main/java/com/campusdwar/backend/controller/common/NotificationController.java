package com.campusdwar.backend.controller.common;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.entity.Notification;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.repository.UserRepository;
import com.campusdwar.backend.service.admin.NotificationService;
@RestController
@RequestMapping("/notifications")
@PreAuthorize("hasAnyRole('STUDENT','FACULTY')")
public class NotificationController {

    private final NotificationService service;
    private final UserRepository userRepository;

    public NotificationController(NotificationService service,
                                  UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public List<Notification> myNotifications() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return service.getMyNotifications(user.getUserId());
    }

    @DeleteMapping("/me")
    public ResponseEntity<?> clearMyNotifications() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        service.clearMyNotifications(user.getUserId());
        return ResponseEntity.ok("Notifications cleared");
    }
}
