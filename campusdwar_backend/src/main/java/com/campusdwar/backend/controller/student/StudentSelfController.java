package com.campusdwar.backend.controller.student;

import java.util.List;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdwar.backend.entity.Attendance;
import com.campusdwar.backend.entity.Marks;
import com.campusdwar.backend.entity.Student;
import com.campusdwar.backend.service.student.AttendanceService;
import com.campusdwar.backend.service.student.MarksService;
import com.campusdwar.backend.service.student.StudentService;

@RestController
@RequestMapping("/student")
@PreAuthorize("hasRole('STUDENT')")
public class StudentSelfController {

    private final StudentService studentService;
    private final MarksService marksService;
    private final AttendanceService attendanceService;

    public StudentSelfController(StudentService studentService,
                                 MarksService marksService,
                                 AttendanceService attendanceService) {
        this.studentService = studentService;
        this.marksService = marksService;
        this.attendanceService = attendanceService;
    }

    @GetMapping("/me")
    public Student getMyAccountInfo() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return studentService.getStudentByEmail(email);
    }

    @PutMapping("/me")
    public Student updateMyProfile(@RequestBody Map<String, Object> payload) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        studentService.updateStudentProfileFromMap(email, payload);
        return studentService.getStudentByEmail(email);
    }


    @GetMapping("/marks")
    public List<Marks> getMyMarks() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        System.out.println("FETCHING MARKS FOR EMAIL = " + email);

        return marksService.getMyMarks(email);
    }
    

    @GetMapping("/attendance")
    public List<Attendance> getMyAttendance() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        System.out.println("FETCHING ATTENDANCE FOR EMAIL = " + email);

        return attendanceService.getMyAttendance(email);
    }



   
}
