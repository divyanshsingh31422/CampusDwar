package com.campusdwar.backend.service.faculty;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.FacultyAttendanceStudentDto;
import com.campusdwar.backend.dto.SaveAttendanceRequest;
import com.campusdwar.backend.entity.Attendance;
import com.campusdwar.backend.entity.Subject;
import com.campusdwar.backend.repository.AttendanceRepository;
import com.campusdwar.backend.repository.StudentRepository;
import com.campusdwar.backend.repository.SubjectRepository;
@Service
public class FacultyAttendanceServiceImpl implements FacultyAttendanceService {

    private final StudentRepository studentRepo;
    private final SubjectRepository subjectRepo;
    private final AttendanceRepository attendanceRepo;

    public FacultyAttendanceServiceImpl(
            StudentRepository studentRepo,
            SubjectRepository subjectRepo,
            AttendanceRepository attendanceRepo
    ) {
        this.studentRepo = studentRepo;
        this.subjectRepo = subjectRepo;
        this.attendanceRepo = attendanceRepo;
    }

    @Override
    public List<String> getCourses() {
        return studentRepo.findAllCourses();
    }

    @Override
    public List<Subject> getSubjects() {
        return subjectRepo.findAll();
    }

    @Override
    public List<FacultyAttendanceStudentDto> getStudents(
            String course,
            Long subjectId,
            LocalDate date
    ) {
        List<FacultyAttendanceStudentDto> list =
                studentRepo.findStudentsByCourse(course);

        list.forEach(s -> {
            attendanceRepo
              .findByStudentStudentIdAndSubjectSubjectIdAndDate(
                s.getStudentId(), subjectId, date
              )
              .ifPresent(a ->
                s.setPresent("PRESENT".equals(a.getStatus()))
              );
        });

        return list;
    }

    @Override
    public void saveAttendance(SaveAttendanceRequest request) {
        for (SaveAttendanceRequest.StudentAttendance sa : request.getStudents()) {

            Attendance attendance = attendanceRepo
              .findByStudentStudentIdAndSubjectSubjectIdAndDate(
                sa.studentId,
                request.getSubjectId(),
                request.getDate()
              )
              .orElse(new Attendance());

            attendance.setStudent(
                studentRepo.getReferenceById(sa.studentId)
            );
            attendance.setSubject(
                subjectRepo.getReferenceById(request.getSubjectId())
            );
            attendance.setDate(request.getDate());
            attendance.setStatus(sa.present ? "PRESENT" : "ABSENT");

            attendanceRepo.save(attendance);
        }
    }
}



