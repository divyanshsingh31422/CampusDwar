package com.campusdwar.backend.service.faculty;

import java.util.List;
import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.FacultyStudentDto;
import com.campusdwar.backend.repository.StudentRepository;

@Service
public class FacultyStudentServiceImpl implements FacultyStudentService {

    private final StudentRepository studentRepository;

    public FacultyStudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<FacultyStudentDto> getAllStudents() {
        return studentRepository.findAllForFaculty();
    }
}
