import { Component, OnInit } from '@angular/core';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent  {

  allData: [];
  constructor(private service : TeacherService) {
      this.service.getTeacher().subscribe((data : any) => {
        this.allData = data;
      })
   }

   remove(id){
    this.service.delete(id).subscribe();
    window.location.reload();
   }
}
