package com.campusdwar.backend.service.faculty;

import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.CreateFacultyRequest;
import com.campusdwar.backend.dto.FacultyListDto;
import com.campusdwar.backend.entity.Faculty;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.exception.ResourceNotFoundException;
import com.campusdwar.backend.repository.FacultyRepository;
import com.campusdwar.backend.repository.UserRepository;

@Service
public class FacultyServiceImpl implements FacultyService {

    private final FacultyRepository facultyRepository;
    private final UserRepository userRepository;

    public FacultyServiceImpl(FacultyRepository facultyRepository,
                              UserRepository userRepository) {
        this.facultyRepository = facultyRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Faculty createFaculty(CreateFacultyRequest request) {

        User user = userRepository.findById(request.getUserId())
        		.orElseThrow(() -> new ResourceNotFoundException("Faculty not found"));

        Faculty faculty = new Faculty();
        faculty.setUser(user);
        faculty.setName(request.getName());
        faculty.setDepartment(request.getDepartment());

        return facultyRepository.save(faculty);
    }

    @Override
    public List<Faculty> getAllFaculty() {
        return facultyRepository.findAll();
    }

    @Override
    public Faculty getFacultyById(Long id) {
        return facultyRepository.findById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("Faculty not found"));

    }

    @Override
    public Faculty updateFaculty(Long id, CreateFacultyRequest request) {

        Faculty faculty = getFacultyById(id);

        faculty.setName(request.getName());
        faculty.setDepartment(request.getDepartment());

        return facultyRepository.save(faculty);
    }

    @Override
    public void deleteFaculty(Long id) {
        facultyRepository.deleteById(id);
    }
    
    @Override
    public Faculty getMyProfile(String email) {
        return facultyRepository.findByUserEmail(email)
                .orElseThrow(() -> new RuntimeException("Faculty not found"));
    }
    
    @Override
    public List<FacultyListDto> getAllFaculties() {
        return facultyRepository.findAllForStudents();
    }
    
    
}
