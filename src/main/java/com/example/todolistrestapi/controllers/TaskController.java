package com.example.todolistrestapi.controllers;

import com.example.todolistrestapi.models.Task;
import com.example.todolistrestapi.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v0.1/tasks")
public class TaskController {

    private final TaskService service;

    @GetMapping
    public List<Task> getAllTasks(){
        return service.getAllTasks();
    }

    @PostMapping("/create_task")
    public Task createTask(@RequestBody Task task) {
        return service.createTask(task);
    }

    @PutMapping("/update_task")
    public void updateTask(@RequestBody Task task) {
        service.updateTask(task);
    }

    @DeleteMapping("/delete_task/{id}")
    public void deleteTaskById(@PathVariable Integer id) {
        service.deleteTaskById(id);
    }

    @DeleteMapping("/delete_all")
    public void deleteAllTasks() {
        service.deleteAllTasks();
    }
}
