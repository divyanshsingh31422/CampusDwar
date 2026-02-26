package com.campusdwar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.campusdwar.backend.entity.Feedback;
import com.campusdwar.backend.entity.Student;
import com.campusdwar.backend.entity.Faculty;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    List<Feedback> findByFaculty(Faculty faculty);

    List<Feedback> findByStudent(Student student);
}
