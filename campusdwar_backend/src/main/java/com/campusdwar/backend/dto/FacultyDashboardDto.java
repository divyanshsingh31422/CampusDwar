package com.campusdwar.backend.dto;

public class FacultyDashboardDto {

    private long totalStudents;
    private long totalCourses;
    private long totalSubjects;
    private boolean attendanceTakenToday;

    public FacultyDashboardDto(
            long totalStudents,
            long totalCourses,
            long totalSubjects,
            boolean attendanceTakenToday
    ) {
        this.totalStudents = totalStudents;
        this.totalCourses = totalCourses;
        this.totalSubjects = totalSubjects;
        this.attendanceTakenToday = attendanceTakenToday;
    }

    public long getTotalStudents() { return totalStudents; }
    public long getTotalCourses() { return totalCourses; }
    public long getTotalSubjects() { return totalSubjects; }
    public boolean isAttendanceTakenToday() { return attendanceTakenToday; }
}
