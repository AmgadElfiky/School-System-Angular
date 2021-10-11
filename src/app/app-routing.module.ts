import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sharedUI/home/home.component';
import { InterfaceComponent } from './sharedUI/interface/interface.component';
import { NotFoundComponent } from './sharedUI/not-found/not-found.component';
import { AddStudentComponent } from './Stuednt/add-student/add-student.component';
import { ListStudentComponent } from './Stuednt/list-student/list-student.component';
import { UpdateStudentComponent } from './Stuednt/update-student/update-student.component';
import { AddTeacherComponent } from './Teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './Teacher/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './Teacher/update-teacher/update-teacher.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: InterfaceComponent},
  {path: "listT", component: ListTeacherComponent},
  {path: "addT", component: AddTeacherComponent},
  {path: "update/:id", component: UpdateTeacherComponent},

  {path: "listS", component: ListStudentComponent},
  {path: "addS", component: AddStudentComponent},
  {path: "updateS/:id", component: UpdateStudentComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
