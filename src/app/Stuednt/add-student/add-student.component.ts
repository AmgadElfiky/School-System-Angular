import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: StudentService, private router: Router) { }

  obj = new Student();

  ngOnInit(): void {
  }

  save() {
    this.service.post(this.obj).subscribe(data => {
      this.router.navigateByUrl("/listS");
    });
  }
}
