import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatabindComponent } from './databind/databind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import { RootComponent } from './root/root.component';
import { CoursesComponent } from './courses/courses.component';
import { CourselistComponent } from './courselist/courselist.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpComponent } from './http/http.component';
import { TodoComponent } from './todo/todo.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { BookComponent } from './book/book.component';
import { BlossomComponent } from './blossom/blossom.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DatabindComponent,
    DirectivesComponent,
    PipesComponent,
    CustomDirective,
    CustomPipe,
    RootComponent,
    CoursesComponent,
    CourselistComponent,
    HttpComponent,
    TodoComponent,
    CoursedetailComponent,
    TdfComponent,
    MdfComponent,
    BookComponent,
    BlossomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
