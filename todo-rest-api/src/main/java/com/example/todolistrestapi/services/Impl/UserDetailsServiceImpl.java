package com.example.todolistrestapi.services.Impl;

import com.example.todolistrestapi.models.User;
import com.example.todolistrestapi.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername");
        return userRepository.findUserByUsername(username).orElseThrow(()->new UsernameNotFoundException("User not found!"));
    }

    public void registration(User user){
        System.out.println(user);
        user.setPassword(encoder().encode(user.getPassword()));
        userRepository.save(user);
    }

    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }
}
