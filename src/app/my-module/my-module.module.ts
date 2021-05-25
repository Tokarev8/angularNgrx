import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";




import { HttpClientModule } from "@angular/common/http";
import { FormStudentComponent } from "./form-students/form-student.component";

import { AppRoutingModule } from "../app-routing.module";
import { EditStudentFormService } from "../student-table/service/edit-student-form.service";
import { StudentTableServiceFormAdd } from "../student-table/service/from-form.service";
import { StudentHardService } from "../student-table/service/student-hard.service";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { ModalDialogComponent } from "./popup/popup.component";



@NgModule({
  declarations: [
    ModalDialogComponent,
    FormStudentComponent,
    EditStudentComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [StudentTableServiceFormAdd, StudentHardService, EditStudentFormService],
  exports: [
    ModalDialogComponent,
    FormStudentComponent,
  ]
})
export class MyModule { }
