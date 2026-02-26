package com.campusdwar.backend.service.admin;

import java.util.List;
import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.dto.CreateUserRequest;

public interface UserManagementService {

    User createUser(CreateUserRequest request);

    List<User> getAllUsers();

    User getUserById(Long id);

    User updateUser(Long id, CreateUserRequest request);

    void deleteUser(Long id);
}
