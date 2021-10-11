import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  allData: [];
  constructor(private service : StudentService) {
      this.service.getTeacher().subscribe((data : any) => {
        this.allData = data;
      })
   }

   remove(id){
    this.service.delete(id).subscribe();
    window.location.reload();
   }
}
