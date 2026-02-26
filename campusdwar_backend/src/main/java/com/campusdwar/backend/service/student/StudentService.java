package com.campusdwar.backend.service.student;

import java.util.List;
import java.util.Map;

import com.campusdwar.backend.dto.CreateStudentRequest;
import com.campusdwar.backend.entity.Student;

public interface StudentService {

    void createStudent(CreateStudentRequest request);

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student updateStudent(Long id, CreateStudentRequest request);

    void deleteStudent(Long id);
    
    Student getStudentByEmail(String email);
    
    void updateStudentProfileFromMap(String email, Map<String, Object> payload);

    
   
}
