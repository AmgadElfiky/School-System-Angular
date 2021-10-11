import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUI/navbar/navbar.component';
import { HomeComponent } from './sharedUI/home/home.component';
import { NotFoundComponent } from './sharedUI/not-found/not-found.component';
import { ListTeacherComponent } from './Teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './Teacher/add-teacher/add-teacher.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateTeacherComponent } from './Teacher/update-teacher/update-teacher.component';
import { AddStudentComponent } from './Stuednt/add-student/add-student.component';
import { ListStudentComponent } from './Stuednt/list-student/list-student.component';
import { UpdateStudentComponent } from './Stuednt/update-student/update-student.component';
import { InterfaceComponent } from './sharedUI/interface/interface.component';
import { VideoLogoComponent } from './sharedUI/video-logo/video-logo.component';
import { FooterComponent } from './sharedUI/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    InterfaceComponent,
    VideoLogoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
