import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private service: TeacherService, private router: Router) { }

  obj = new Teacher();

  ngOnInit(): void {
  }

  save() {
    this.service.post(this.obj).subscribe(data => {
      this.router.navigateByUrl("/listT");
    });
  }
}
