package com.campusdwar.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.campusdwar.backend.entity.Marks;

public interface MarksRepository extends JpaRepository<Marks, Long> {

//    List<Marks> findByStudent(Student student);

//    List<Marks> findBySubject(Subject subject);
//
//    List<Marks> findByStudentUserEmail(String email);
//    
//    Optional<Marks> findByStudentAndSubject(Student student, Subject subject);
    
 //   List<Marks> findByStudentStudentId(Long studentId);

	@Query("""
	        SELECT m
	        FROM Marks m
	        JOIN FETCH m.subject s
	        JOIN m.student st
	        JOIN st.user u
	        WHERE u.email = :email
	    """)
	    List<Marks> findMarksByStudentEmail(@Param("email") String email);
	
	Optional<Marks> findByStudentStudentIdAndSubjectSubjectId(
	        Long studentId,
	        Long subjectId
	);

	 List<Marks> findBySubjectSubjectId(Long subjectId);
}
