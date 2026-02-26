package com.campusdwar.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campusdwar.backend.dto.FacultyListDto;
import com.campusdwar.backend.entity.Faculty;
import com.campusdwar.backend.entity.User;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {

    Optional<Faculty> findByUser(User user);

    List<Faculty> findByDepartment(String department);
    
    Optional<Faculty> findByUserEmail(String email);
    
    @Query("""
    	    SELECT new com.campusdwar.backend.dto.FacultyListDto(
    	        f.facultyId,
    	        f.name,
    	        f.department,
    	        u.email,
    	        f.phoneNo
    	    )
    	    FROM Faculty f
    	    JOIN f.user u
    	    WHERE f.status = 'Active'
    	""")
    	List<FacultyListDto> findAllForStudents();

}
