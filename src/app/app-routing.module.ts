import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditStudentComponent } from "./my-module/edit-student/edit-student.component";
import { FormStudentComponent } from "./my-module/form-students/form-student.component";
import { Page404Component } from "./page-404/page-404.component";
import { StudentTableComponent } from "./student-table/student-table.component";


const routes: Routes = [
  {path: "", component: StudentTableComponent},
  {path: "add-student", component: FormStudentComponent},
  {path: "edit-student/:id", component: EditStudentComponent},
  {path: "page-404", component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
