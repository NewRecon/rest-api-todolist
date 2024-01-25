package com.example.todolistrestapi.services.Impl;

import com.example.todolistrestapi.models.Task;
import com.example.todolistrestapi.repositories.TaskRepository;
import com.example.todolistrestapi.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository repository;
    @Override
    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    @Override
    public Task createTask(Task task) {
        return repository.save(task);
    }

    @Override
    public void updateTask(Task task) {
        repository.save(task);
    }

    @Override
    public void deleteTaskById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteAllTasks() {
        repository.deleteAll();
    }
}
