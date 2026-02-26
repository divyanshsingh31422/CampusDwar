package com.campusdwar.backend.service.student;

import java.util.List;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.entity.Marks;
import com.campusdwar.backend.repository.MarksRepository;

@Service
public class MarksServiceImpl implements MarksService {

    private final MarksRepository marksRepository;

    public MarksServiceImpl(MarksRepository marksRepository) {
        this.marksRepository = marksRepository;
    }

    @Override
    public List<Marks> getMyMarks(String email) {
        return marksRepository.findMarksByStudentEmail(email);
    }
}
