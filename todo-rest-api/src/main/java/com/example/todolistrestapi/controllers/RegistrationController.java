package com.example.todolistrestapi.controllers;

import com.example.todolistrestapi.models.User;
import com.example.todolistrestapi.services.Impl.UserDetailsServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/registration")
@CrossOrigin("http://localhost:3000/")
public class RegistrationController {
    UserDetailsServiceImpl service;
    @PostMapping
    public void registration(@RequestBody User user){
        service.registration(user);
    }
}
