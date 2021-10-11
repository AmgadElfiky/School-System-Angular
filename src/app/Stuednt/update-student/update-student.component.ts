import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {


  id;
  constructor(private service: StudentService, private router: Router, private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data: any) => {
      this.obj = data;
    })
    // http://localhost:4200/update/2
  }

  obj = new Student();

  ngOnInit(): void {
  }

  update() {
    this.service.put(this.obj, this.id).subscribe(data => {
      this.router.navigateByUrl("/listS");
    });
  }
}
