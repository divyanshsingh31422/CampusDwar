package com.campusdwar.backend.controller.admin;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.dto.NotificationRequest;
import com.campusdwar.backend.service.admin.NotificationService;
@RestController
@RequestMapping("/admin/notifications")
@PreAuthorize("hasRole('ADMIN')")
public class AdminNotificationController {

    private final NotificationService service;

    public AdminNotificationController(NotificationService service) {
        this.service = service;
    }

   
    @PostMapping("/broadcast")
    public ResponseEntity<?> sendToAll(
            @RequestBody NotificationRequest request
    ) {
        System.out.println("ADMIN BROADCAST HIT → " + request.getMessage());
        service.sendBroadcast(request.getMessage());
        return ResponseEntity.ok("Notification sent successfully");
    }

}
