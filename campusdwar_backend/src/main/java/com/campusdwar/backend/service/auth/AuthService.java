package com.campusdwar.backend.service.auth;

import com.campusdwar.backend.entity.User;

public interface AuthService {

    User authenticate(String username, String password);
}
