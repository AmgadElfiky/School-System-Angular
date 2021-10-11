import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  id;
  constructor(private service: TeacherService, private router: Router, private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data: any) => {
      this.obj = data;
    })
    // http://localhost:4200/update/2
  }

  obj = new Teacher();

  ngOnInit(): void {
  }

  update() {
    this.service.put(this.obj, this.id).subscribe(data => {
      this.router.navigateByUrl("/listT");
    });
  }
}
