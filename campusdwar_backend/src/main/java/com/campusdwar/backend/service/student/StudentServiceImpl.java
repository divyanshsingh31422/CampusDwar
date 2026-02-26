package com.campusdwar.backend.service.student;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.campusdwar.backend.dto.CreateStudentRequest;
import com.campusdwar.backend.entity.Student;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.exception.ResourceNotFoundException;
import com.campusdwar.backend.repository.StudentRepository;
import com.campusdwar.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;

    public StudentServiceImpl(StudentRepository studentRepository,
                              UserRepository userRepository) {
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public void createStudent(CreateStudentRequest req) {

        User user = userRepository.findById(req.getUserId())
            .orElseThrow(() -> new RuntimeException("User not found"));

        Student student = new Student();
        student.setUser(user);
        student.setName(req.getName());
        student.setCourse(req.getCourse());
        student.setRollNo(req.getRollNo());
        student.setDepartment(req.getDepartment());
        student.setSemester(req.getSemester());

        student.setEmail(req.getEmail());
        student.setPrn(req.getPrn());   

        student.setStatus("Active");

        studentRepository.save(student);
    }


    @Override
    public Student getStudentByEmail(String email) {
        return studentRepository.findByUserEmail(email)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }
    
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    @Override
    public Student updateStudent(Long id, CreateStudentRequest request) {

        Student student = getStudentById(id);

        student.setRollNo(request.getRollNo());
        student.setDepartment(request.getDepartment());
        student.setSemester(request.getSemester());

        return studentRepository.save(student);
    }

    @Override
    @Transactional
    public void deleteStudent(Long studentId) {

        Student student = studentRepository.findById(studentId)
            .orElseThrow(() -> new RuntimeException("Student not found"));

        User user = student.getUser();
        studentRepository.delete(student);
        userRepository.delete(user);
    }

    
    @Transactional
    @Override
    public void updateStudentProfileFromMap(String email, Map<String, Object> payload) {

        Student student = studentRepository.findByUserEmail(email)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        if (payload.containsKey("name"))
            student.setName((String) payload.get("name"));

        if (payload.containsKey("contact"))
            student.setContact((String) payload.get("contact"));

        if (payload.containsKey("address"))
            student.setAddress((String) payload.get("address"));

        if (payload.containsKey("city"))
            student.setCity((String) payload.get("city"));

        if (payload.containsKey("state"))
            student.setState((String) payload.get("state"));

        if (payload.containsKey("pincode"))
            student.setPincode((String) payload.get("pincode"));

        if (payload.containsKey("fatherName"))
            student.setFatherName((String) payload.get("fatherName"));

        if (payload.containsKey("fatherMobile"))
            student.setFatherMobile((String) payload.get("fatherMobile"));

        if (payload.containsKey("fatherEmail"))
            student.setFatherEmail((String) payload.get("fatherEmail"));

        if (payload.containsKey("motherName"))
            student.setMotherName((String) payload.get("motherName"));

        if (payload.containsKey("emergencyContactName"))
            student.setEmergencyContactName((String) payload.get("emergencyContactName"));

        if (payload.containsKey("emergencyContactNumber"))
            student.setEmergencyContactNumber((String) payload.get("emergencyContactNumber"));


        if (payload.containsKey("bloodGroup"))
            student.setBloodGroup((String) payload.get("bloodGroup"));

 
        if (payload.containsKey("gender"))
            student.setGender((String) payload.get("gender"));
        
 
        if (payload.containsKey("dateOfBirth") && payload.get("dateOfBirth") != null) {
            student.setDateOfBirth(
                LocalDate.parse(payload.get("dateOfBirth").toString())
            );
        }

        if (payload.containsKey("category"))
            student.setCategory((String) payload.get("category"));

        if (payload.containsKey("admissionType"))
            student.setAdmissionType((String) payload.get("admissionType"));

        if (payload.containsKey("admissionYear"))
            student.setAdmissionYear((Integer) payload.get("admissionYear"));

        studentRepository.save(student);
    }


   


}
