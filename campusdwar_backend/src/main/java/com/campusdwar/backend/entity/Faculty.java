package com.campusdwar.backend.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "faculty")
public class Faculty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faculty_id")
    private Long facultyId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    @JsonIgnore
    private User user;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String department;

    // ===== Newly Added Fields =====

    @Column(unique = true)
    private String email;

    @Column(name = "phone_no", length = 20)
    private String phoneNo;

    @Column(length = 10)
    private String gender;

    @Column(length = 20)
    private String status;

    @Column(columnDefinition = "TEXT")
    private String address;

    // ===== Constructors =====

    public Faculty() {}

    public Faculty(Long facultyId, User user, String name, String department,
                   String email, String phoneNo, String gender,
                   String status, String address) {
        this.facultyId = facultyId;
        this.user = user;
        this.name = name;
        this.department = department;
        this.email = email;
        this.phoneNo = phoneNo;
        this.gender = gender;
        this.status = status;
        this.address = address;
    }

    // ===== Getters & Setters =====

    public Long getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(Long facultyId) {
        this.facultyId = facultyId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
