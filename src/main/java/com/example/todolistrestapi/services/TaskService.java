package com.example.todolistrestapi.services;

import com.example.todolistrestapi.models.Task;

import java.util.List;

public interface TaskService {
    List<Task> getAllTasks();
    Task createTask(Task task);
    void updateTask(Task task);
    void deleteTaskById(Integer id);
    void deleteAllTasks();
}
