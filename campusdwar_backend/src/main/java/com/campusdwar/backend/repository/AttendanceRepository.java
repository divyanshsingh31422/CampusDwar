package com.campusdwar.backend.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.campusdwar.backend.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    @Query("""
        SELECT a
        FROM Attendance a
        JOIN FETCH a.subject s
        JOIN a.student st
        JOIN st.user u
        WHERE u.email = :email
        ORDER BY a.date DESC
    """)
    List<Attendance> findAttendanceByStudentEmail(@Param("email") String email);
    
    
    
    Optional<Attendance> findByStudentStudentIdAndSubjectSubjectIdAndDate(
	        Long studentId,
	        Long subjectId,
	        LocalDate date
	);

    
    @Query("""
    	    SELECT DISTINCT a.date
    	    FROM Attendance a
    	    JOIN a.student s
    	    WHERE s.course = :course
    	      AND a.subject.subjectId = :subjectId
    	    ORDER BY a.date DESC
    	""")
    	List<LocalDate> findAttendanceDates(
    	        @Param("course") String course,
    	        @Param("subjectId") Long subjectId
    	);
    
    @Query("""
    		  SELECT COUNT(a) > 0
    		  FROM Attendance a
    		  WHERE a.date = CURRENT_DATE
    		""")
    		boolean existsAttendanceForToday();

}
