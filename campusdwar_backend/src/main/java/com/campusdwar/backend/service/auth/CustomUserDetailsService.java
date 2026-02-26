package com.campusdwar.backend.service.auth;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.campusdwar.backend.entity.User;
import com.campusdwar.backend.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        String role = user.getRole().getRoleName(); // adjust getter if needed

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(role.replace("ROLE_", ""))
                .build();
    }
}
