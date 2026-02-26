package com.campusdwar.backend.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "marks")
public class Marks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "marks_id")
    private Long marksId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    @JsonIgnore   // ✅ keep ignored to avoid recursion
    private Student student;

    @ManyToOne(fetch = FetchType.EAGER)   // 🔥 MUST BE EAGER
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @Column(name = "internal_marks")
    private Integer internalMarks;

    @Column(name = "external_marks")
    private Integer externalMarks;

    @Column(name = "total")
    private Integer total;

	public Long getMarksId() {
		return marksId;
	}

	public void setMarksId(Long marksId) {
		this.marksId = marksId;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public Integer getInternalMarks() {
		return internalMarks;
	}

	public void setInternalMarks(Integer internalMarks) {
		this.internalMarks = internalMarks;
	}

	public Integer getExternalMarks() {
		return externalMarks;
	}

	public void setExternalMarks(Integer externalMarks) {
		this.externalMarks = externalMarks;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

    
    
}
