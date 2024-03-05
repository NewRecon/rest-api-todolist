package com.example.todolistrestapi.controllers;

import com.example.todolistrestapi.models.Task;
import com.example.todolistrestapi.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v0.1")
@CrossOrigin("http://localhost:3000/")
public class TaskController {

    private final TaskService service;

    @GetMapping("/tasks")
    public List<Task> getAllTasks(){
        System.out.println("getAllTasks()");
        return service.getAllTasks();
    }

    @PostMapping("/task")
    public Task createTask(@RequestBody Task task) {
        return service.createTask(task);
    }

    @PutMapping("/task")
    public void updateTask(@RequestBody Task task) {
        service.updateTask(task);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTaskById(@PathVariable Integer id) {
        service.deleteTaskById(id);
    }

    @DeleteMapping("/tasks")
    public void deleteAllTasks() {
        service.deleteAllTasks();
    }
}
