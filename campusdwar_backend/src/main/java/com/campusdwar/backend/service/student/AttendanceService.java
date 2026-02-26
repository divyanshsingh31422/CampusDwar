package com.campusdwar.backend.service.student;

import java.util.List;
import com.campusdwar.backend.entity.Attendance;

public interface AttendanceService {
    List<Attendance> getMyAttendance(String email);
}
