package com.campusdwar.backend.service.faculty;

import java.util.List;

import com.campusdwar.backend.dto.CreateSubjectRequest;
import com.campusdwar.backend.entity.Subject;

public interface SubjectService {

    Subject createSubject(CreateSubjectRequest request);

    List<Subject> getAllSubjects();

    Subject getSubjectById(Long id);

    Subject updateSubject(Long id, CreateSubjectRequest request);

    void deleteSubject(Long id);
}
