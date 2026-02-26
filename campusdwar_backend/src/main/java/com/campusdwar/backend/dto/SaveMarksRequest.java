package com.campusdwar.backend.dto;

import java.util.List;

public class SaveMarksRequest {

    private Long subjectId;
    private List<StudentMarks> students;

    public static class StudentMarks {
        public Long studentId;
        public Integer internalMarks;
        public Integer externalMarks;
    }

    public Long getSubjectId() { return subjectId; }
    public List<StudentMarks> getStudents() { return students; }
}
