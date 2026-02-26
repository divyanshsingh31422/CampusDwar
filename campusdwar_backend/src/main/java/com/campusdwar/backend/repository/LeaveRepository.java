package com.campusdwar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.campusdwar.backend.entity.Leave;
import com.campusdwar.backend.entity.User;

import java.util.List;

public interface LeaveRepository extends JpaRepository<Leave, Long> {

    List<Leave> findByUser(User user);

    List<Leave> findByStatus(String status);
}
