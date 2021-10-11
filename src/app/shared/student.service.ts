import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApifunctionsService<Student>{

  constructor(http: HttpClient) {
    super("http://localhost:3000/student",http);
   }
}
