package com.campusdwar.backend.service.faculty;

import java.util.List;

import com.campusdwar.backend.dto.CreateFacultyRequest;
import com.campusdwar.backend.dto.FacultyListDto;
import com.campusdwar.backend.entity.Faculty;

public interface FacultyService {

    Faculty createFaculty(CreateFacultyRequest request);

    List<Faculty> getAllFaculty();

    Faculty getFacultyById(Long id);

    Faculty updateFaculty(Long id, CreateFacultyRequest request);

    void deleteFaculty(Long id);
    
    Faculty getMyProfile(String email);
    
    List<FacultyListDto> getAllFaculties();
}
