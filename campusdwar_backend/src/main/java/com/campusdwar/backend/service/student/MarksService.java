package com.campusdwar.backend.service.student;

import java.util.List;
import com.campusdwar.backend.entity.Marks;

public interface MarksService {
    List<Marks> getMyMarks(String email);
}
