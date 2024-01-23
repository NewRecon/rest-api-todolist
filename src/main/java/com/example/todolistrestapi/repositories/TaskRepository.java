package com.example.todolistrestapi.repositories;

import com.example.todolistrestapi.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Integer> {
}
