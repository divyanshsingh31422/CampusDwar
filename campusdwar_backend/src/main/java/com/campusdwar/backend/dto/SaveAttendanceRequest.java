package com.campusdwar.backend.dto;

import java.time.LocalDate;
import java.util.List;

public class SaveAttendanceRequest {

    private LocalDate date;
    private Long subjectId;
    private List<StudentAttendance> students;

    public static class StudentAttendance {
        public Long studentId;
        public boolean present;
    }

    public LocalDate getDate() { return date; }
    public Long getSubjectId() { return subjectId; }
    public List<StudentAttendance> getStudents() { return students; }
}
