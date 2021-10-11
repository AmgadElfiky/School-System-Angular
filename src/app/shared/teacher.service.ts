import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApifunctionsService<Teacher>{

  constructor(http: HttpClient) {
    super("http://localhost:3000/teachers",http);
   }
}
