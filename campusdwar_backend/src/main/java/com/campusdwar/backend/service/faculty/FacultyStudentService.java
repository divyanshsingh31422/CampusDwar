package com.campusdwar.backend.service.faculty;

import java.util.List;
import com.campusdwar.backend.dto.FacultyStudentDto;

public interface FacultyStudentService {
    List<FacultyStudentDto> getAllStudents();
}
