import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "../../student-table/student";

@Injectable()
export class FormStudentService {
  constructor(private http: HttpClient, private router: Router) {

  }


  addNewStudent(array: Student): void {
    const studentWithoutId: StudentWithoutId = new StudentWithoutId(array.surname,
      array.name, array.middleName, array.dateOfBirth, array.averageMark);
    this.http.post<Student>("http://localhost:3000/students", studentWithoutId)
      .subscribe( response => {
        array._id = response?._id;
      }, errors => {
        this.router.navigate(["/page-404"]);
      });


  }




  changeStudent(array: Student): void {
    const studentWithoutId: StudentWithoutId = new StudentWithoutId(array.surname,
      array.name, array.middleName, array.dateOfBirth, array.averageMark);
    this.http.put(`http://localhost:3000/students/${array._id}`, studentWithoutId)
      .subscribe( response => {
      }, errors => {
      this.router.navigate(["/page-404"]);
      });

  }
}




class StudentWithoutId {
  public surname: string;
  public name: string;
  public middleName: string;
  public dateOfBirth: string;
  public averageMark: string;


  constructor(surname: string, name: string,
              middleName: string, dateOfBirth: string,
              averageMark: string) {
    this.surname = surname;
    this.name = name;
    this.middleName = middleName;
    this.dateOfBirth = dateOfBirth;
    this.averageMark = averageMark;
  }
}
