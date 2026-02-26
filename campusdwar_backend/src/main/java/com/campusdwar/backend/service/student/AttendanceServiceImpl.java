package com.campusdwar.backend.service.student;

import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.entity.Attendance;
import com.campusdwar.backend.repository.AttendanceRepository;

@Service
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceServiceImpl(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public List<Attendance> getMyAttendance(String email) {
        return attendanceRepository.findAttendanceByStudentEmail(email);
    }
}
