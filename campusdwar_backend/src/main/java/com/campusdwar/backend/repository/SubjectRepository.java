package com.campusdwar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.campusdwar.backend.entity.Subject;
import com.campusdwar.backend.entity.Faculty;

import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

    List<Subject> findByFaculty(Faculty faculty);

    List<Subject> findBySemester(Integer semester);
    
    List<Subject> findAll();
    
    long count();

}
