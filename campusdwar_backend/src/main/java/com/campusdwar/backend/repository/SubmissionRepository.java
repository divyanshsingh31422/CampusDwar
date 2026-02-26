package com.campusdwar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.campusdwar.backend.entity.Submission;
import com.campusdwar.backend.entity.Assignment;
import com.campusdwar.backend.entity.Student;

import java.util.List;
import java.util.Optional;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {

    List<Submission> findByAssignment(Assignment assignment);

    List<Submission> findByStudent(Student student);

    Optional<Submission> findByAssignmentAndStudent(Assignment assignment, Student student);
}
