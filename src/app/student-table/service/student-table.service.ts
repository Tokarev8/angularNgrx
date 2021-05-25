import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IStudent } from "../../store/state/state";
import {  Student } from "../student";
import { StudentHardService } from "./student-hard.service";


@Injectable()
export class StudentTableService {
  constructor(private http: HttpClient, private hardStudents: StudentHardService,
              private router: Router) {

  }



// server
  getArrayStudentsFromServer(arrayOrigin: Student[]): Student[]  {
    arrayOrigin = [];

    this.http.get<Student[]>("http://localhost:3000/students")
      .subscribe(response => {

      for (const element of response) {
         arrayOrigin.push(element);
        }
      }, errors => {
        this.router.navigate(["/page-404"]);
      });

    return arrayOrigin;
  }

  // сервер для стора
/*
   getBackendArray(): IStudent[]  {
    const studets: IStudent[] = [];

    this.http.get<Student[]>("http://localhost:3000/students")
      .subscribe(response => {

        for (const element of response) {
          studets.push(element);
        }
      }, errors => {
        this.router.navigate(["/page-404"]);
      });

    return studets;
  }

*/


  // not server
  getArrayStudentsFromHard (arrayOrigin: Student[]): Student[] {
    arrayOrigin = this.hardStudents.arrayOrigin;
    return arrayOrigin;
  }


  getArray(arrayOrigin: Student[], parametrs: string| undefined): Student[] {
    if (parametrs === "true") {
      return this.getArrayStudentsFromServer(arrayOrigin);
    }
     return  this.getArrayStudentsFromHard(arrayOrigin);
  }



  getBackendArray(): IStudent[]  {

    const array: Student[] = [];
    const students: IStudent[] = [];
    const student: IStudent = {
      surname : "element.surname",
      name : "element.name",
      middleName : "element.middleName",
      dateOfBirth : "element.dateOfBirth",
      averageMark : "element.averageMark",
      _id : "element._id",
    };



     this.http.get<Student[]>("http://localhost:3000/students")
      .subscribe(response => {
        for (const element of response) {
          array.push(element);
          student.surname = element.surname;
          student.name = element.name;
          student.middleName = element.middleName;
          student.dateOfBirth = element.dateOfBirth;
          student.averageMark = element.averageMark;
          student._id = element._id;
          students.push(student);
        }
      }, errors => {
        this.router.navigate(["/page-404"]);
      });
    return students;
  }


}
