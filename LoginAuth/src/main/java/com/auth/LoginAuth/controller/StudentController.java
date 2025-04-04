package com.auth.LoginAuth.controller;

import com.auth.LoginAuth.entity.Student;
import com.auth.LoginAuth.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public ResponseEntity<Student> createStudent(@RequestBody Student student){
        Student students=studentService.registerStudent(student);
        return  new ResponseEntity<>(students, HttpStatus.CREATED);
    }
}
