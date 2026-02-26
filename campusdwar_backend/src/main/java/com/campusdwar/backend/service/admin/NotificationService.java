package com.campusdwar.backend.service.admin;

import java.util.List;

import com.campusdwar.backend.entity.Notification;

public interface NotificationService {

    void sendBroadcast(String message); // ADMIN only

    List<Notification> getMyNotifications(Long userId);

    void clearMyNotifications(Long userId);
}