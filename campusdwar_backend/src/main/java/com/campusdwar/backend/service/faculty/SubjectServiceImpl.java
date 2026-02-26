package com.campusdwar.backend.service.faculty;

import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.CreateSubjectRequest;
import com.campusdwar.backend.entity.Faculty;
import com.campusdwar.backend.entity.Subject;
import com.campusdwar.backend.exception.ResourceNotFoundException;
import com.campusdwar.backend.repository.FacultyRepository;
import com.campusdwar.backend.repository.SubjectRepository;

@Service
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final FacultyRepository facultyRepository;

    public SubjectServiceImpl(SubjectRepository subjectRepository,
                              FacultyRepository facultyRepository) {
        this.subjectRepository = subjectRepository;
        this.facultyRepository = facultyRepository;
    }

    @Override
    public Subject createSubject(CreateSubjectRequest request) {

        Faculty faculty = facultyRepository.findById(request.getFacultyId())
        		.orElseThrow(() -> new ResourceNotFoundException("Subject not found"));

        Subject subject = new Subject();
        subject.setSubjectName(request.getSubjectName());
        subject.setSemester(request.getSemester());
        subject.setFaculty(faculty);

        return subjectRepository.save(subject);
    }

    @Override
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    @Override
    public Subject getSubjectById(Long id) {
        return subjectRepository.findById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("Subject not found"));
    }

    @Override
    public Subject updateSubject(Long id, CreateSubjectRequest request) {

        Subject subject = getSubjectById(id);

        subject.setSubjectName(request.getSubjectName());
        subject.setSemester(request.getSemester());

        if (request.getFacultyId() != null) {
            Faculty faculty = facultyRepository.findById(request.getFacultyId())
            		.orElseThrow(() -> new ResourceNotFoundException("Subject not found"));
            subject.setFaculty(faculty);
        }

        return subjectRepository.save(subject);
    }

    @Override
    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}
