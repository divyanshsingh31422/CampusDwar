package com.campusdwar.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.campusdwar.backend.dto.FacultyAttendanceStudentDto;
import com.campusdwar.backend.dto.FacultyMarksStudentDto;
import com.campusdwar.backend.dto.FacultyStudentDto;
import com.campusdwar.backend.entity.Student;
import com.campusdwar.backend.entity.User;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByUser(User user);
    Optional<Student> findByEmail(String email);
    Optional<Student> findByRollNo(String rollNo);

    boolean existsByRollNo(String rollNo);
    
    Optional<Student> findByUserEmail(String email);
    
    
    @Query("""
            SELECT new com.campusdwar.backend.dto.FacultyStudentDto(
                s.studentId,
                s.name,
                s.prn,
                s.rollNo,
                s.course,
                s.email,
                s.contact
            )
            FROM Student s
            WHERE s.status = 'Active'
        """)
        List<FacultyStudentDto> findAllForFaculty();
    

    
    @Query("SELECT DISTINCT s.course FROM Student s WHERE s.status = 'Active'")
    List<String> findAllCourses();

    
    @Query("""
    		  SELECT new com.campusdwar.backend.dto.FacultyAttendanceStudentDto(
    		    s.studentId,
    		    s.name,
    		    s.prn,
    		    s.rollNo,
    		    false
    		  )
    		  FROM Student s
    		  WHERE s.course = :course AND s.status = 'Active'
    		""")
    		List<FacultyAttendanceStudentDto> findStudentsByCourse(
    		        @Param("course") String course
    		);


    @Query("""
    		  SELECT new com.campusdwar.backend.dto.FacultyMarksStudentDto(
    		    s.studentId,
    		    s.name,
    		    s.prn,
    		    s.rollNo,
    		    m.internalMarks,
    		    m.externalMarks
    		  )
    		  FROM Student s
    		  LEFT JOIN Marks m
    		    ON m.student.studentId = s.studentId
    		   AND m.subject.subjectId = :subjectId
    		  WHERE s.course = :course AND s.status = 'Active'
    		""")
    		List<FacultyMarksStudentDto> findStudentsForMarks(
    		        @Param("course") String course,
    		        @Param("subjectId") Long subjectId
    		);

    @Query("SELECT COUNT(s) FROM Student s WHERE s.status = 'Active'")
    long countActiveStudents();

    @Query("SELECT COUNT(DISTINCT s.course) FROM Student s WHERE s.status = 'Active'")
    long countCourses();

}
