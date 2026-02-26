package com.campusdwar.backend.service.faculty;

import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.FacultyMarksStudentDto;
import com.campusdwar.backend.dto.SaveMarksRequest;
import com.campusdwar.backend.entity.Marks;
import com.campusdwar.backend.repository.MarksRepository;
import com.campusdwar.backend.repository.StudentRepository;
import com.campusdwar.backend.repository.SubjectRepository;


@Service
public class FacultyMarksServiceImpl implements FacultyMarksService {

    private final StudentRepository studentRepo;
    private final MarksRepository marksRepo;
    private final SubjectRepository subjectRepo;

    public FacultyMarksServiceImpl(
            StudentRepository studentRepo,
            MarksRepository marksRepo,
            SubjectRepository subjectRepo
    ) {
        this.studentRepo = studentRepo;
        this.marksRepo = marksRepo;
        this.subjectRepo = subjectRepo;
    }

    @Override
    public List<FacultyMarksStudentDto> getStudents(
            String course,
            Long subjectId
    ) {
        return studentRepo.findStudentsForMarks(course, subjectId);
    }

    @Override
    public void saveMarks(SaveMarksRequest request) {

        for (SaveMarksRequest.StudentMarks sm : request.getStudents()) {

            Marks marks = marksRepo
              .findByStudentStudentIdAndSubjectSubjectId(
                sm.studentId, request.getSubjectId()
              )
              .orElse(new Marks());

            marks.setStudent(
                studentRepo.getReferenceById(sm.studentId)
            );
            marks.setSubject(
                subjectRepo.getReferenceById(request.getSubjectId())
            );
            marks.setInternalMarks(sm.internalMarks);
            marks.setExternalMarks(sm.externalMarks);
            marks.setTotal(
                (sm.internalMarks == null ? 0 : sm.internalMarks) +
                (sm.externalMarks == null ? 0 : sm.externalMarks)
            );

            marksRepo.save(marks);
        }
    }
}
