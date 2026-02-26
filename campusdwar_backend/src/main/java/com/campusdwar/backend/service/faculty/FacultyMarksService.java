package com.campusdwar.backend.service.faculty;

import java.util.List;

import com.campusdwar.backend.dto.FacultyMarksStudentDto;
import com.campusdwar.backend.dto.SaveMarksRequest;

public interface FacultyMarksService {

    List<FacultyMarksStudentDto> getStudents(
            String course,
            Long subjectId
    );

    void saveMarks(SaveMarksRequest request);
}
