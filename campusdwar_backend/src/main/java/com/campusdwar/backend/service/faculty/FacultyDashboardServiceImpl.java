package com.campusdwar.backend.service.faculty;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.FacultyDashboardDto;
import com.campusdwar.backend.repository.AttendanceRepository;
import com.campusdwar.backend.repository.StudentRepository;
import com.campusdwar.backend.repository.SubjectRepository;
@Service
public class FacultyDashboardServiceImpl implements FacultyDashboardService {

    private final StudentRepository studentRepo;
    private final SubjectRepository subjectRepo;
    private final AttendanceRepository attendanceRepo;

    public FacultyDashboardServiceImpl(
            StudentRepository studentRepo,
            SubjectRepository subjectRepo,
            AttendanceRepository attendanceRepo
    ) {
        this.studentRepo = studentRepo;
        this.subjectRepo = subjectRepo;
        this.attendanceRepo = attendanceRepo;
    }

    @Override
    public FacultyDashboardDto getDashboardData() {
        return new FacultyDashboardDto(
                studentRepo.countActiveStudents(),
                studentRepo.countCourses(),
                subjectRepo.count(),
                attendanceRepo.existsAttendanceForToday()
        );
    }
}
