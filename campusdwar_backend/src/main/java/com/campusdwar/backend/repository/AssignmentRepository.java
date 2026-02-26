package com.campusdwar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.campusdwar.backend.entity.Assignment;
import com.campusdwar.backend.entity.Subject;

import java.time.LocalDate;
import java.util.List;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {

    List<Assignment> findBySubject(Subject subject);

    List<Assignment> findByDueDateBefore(LocalDate date);
    
    
}
