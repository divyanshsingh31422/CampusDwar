package com.campusdwar.backend.service.faculty;

import java.time.LocalDate;
import java.util.List;

import com.campusdwar.backend.dto.FacultyAttendanceStudentDto;
import com.campusdwar.backend.dto.SaveAttendanceRequest;
import com.campusdwar.backend.entity.Subject;
public interface FacultyAttendanceService {

    List<String> getCourses();

    List<Subject> getSubjects();

    List<FacultyAttendanceStudentDto> getStudents(
            String course,
            Long subjectId,
            LocalDate date
    );

    void saveAttendance(SaveAttendanceRequest request);
}
