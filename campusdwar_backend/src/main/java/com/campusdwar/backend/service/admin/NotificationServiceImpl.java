package com.campusdwar.backend.service.admin;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.entity.Notification;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.repository.NotificationRepository;
import com.campusdwar.backend.repository.UserRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepo;
    private final UserRepository userRepo;

    public NotificationServiceImpl(NotificationRepository notificationRepo,
                                   UserRepository userRepo) {
        this.notificationRepo = notificationRepo;
        this.userRepo = userRepo;
    }

    @Override
    public void sendBroadcast(String message) {

        List<User> users = userRepo.findAll();
        List<Notification> notifications = new ArrayList<>();

        for (User user : users) {

            if (user.getRole() == null) continue;

            String role = user.getRole().getRoleName();

            if (!role.toUpperCase().contains("STUDENT") &&
                !role.toUpperCase().contains("FACULTY")) {
                continue;
            }

            Notification n = new Notification();
            n.setUser(user);
            n.setMessage(message);
            n.setCreatedAt(LocalDateTime.now());

            notifications.add(n);
        }

        notificationRepo.saveAll(notifications);
        notificationRepo.flush();
    }

    @Override
    public List<Notification> getMyNotifications(Long userId) {
        return notificationRepo.findByUserUserIdOrderByCreatedAtDesc(userId);
    }

    @Override
    public void clearMyNotifications(Long userId) {
        notificationRepo.deleteByUserUserId(userId);
    }
}
