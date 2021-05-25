import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { backendActionListner, setArrayStudent, setBackendArrayStudent } from "./store/action/action";
import { initialState, IStudent } from "./store/state/state";
import { StudentTableService } from "./student-table/service/student-table.service";
import { Student } from "./student-table/student";

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";



@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}

  backendArray$ = createEffect(() => this.actions$.pipe(
    ofType(backendActionListner),
    map(() => setBackendArrayStudent( { students: this.getBackendArray() } ) ),
  ), );

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

          console.log("Что получили на выходе", student);
        }

      }, errors => {
        this.router.navigate(["/page-404"]);
      });

    return students;
  }

}






/*
loadDate$  = createEffect(() => this.actions$.pipe(
  ofType(backendActionListner),
  mergeMap(() => this.studentTableService.getBackendArray())

))

*/



/*


  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}

   backendArray$ = createEffect(() => this.actions$.pipe(
    ofType(backendActionListner),
    map(() => setBackendArrayStudent( { students: this.getBackendArray() } ) ),
    ), );

  getBackendArray(students: IStudent[]): IStudent[]  {
    return students;
  }


async getBackendArray(): Promise<IStudent[]>  {

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



await this.http.get<Student[]>("http://localhost:3000/students")
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

      console.log("Что получили на выходе", student);
    }

  }, errors => {
    this.router.navigate(["/page-404"]);
  });




return students;
}



}


function f( response: Student[] ): IStudent[] {
  const array: IStudent[] = [];
  const student: IStudent = {
    surname : "element.surname",
    name : "element.name",
    middleName : "element.middleName",
    dateOfBirth : "element.dateOfBirth",
    averageMark : "element.averageMark",
    _id : "element._id",
  };

  for (const element of response) {
    array.push(element);

    student.surname = element.surname;
    student.name = element.name;
    student.middleName = element.middleName;
    student.dateOfBirth = element.dateOfBirth;
    student.averageMark = element.averageMark;
    student._id = element._id;
    array.push(student);


  }
  return array;










  student.surname = element.surname,
  student.name = element.name,
  student.middleName = element.middleName,
  student.dateOfBirth = element.dateOfBirth,
  student.averageMark = element.averageMark,
  student._id = element._id,

console.log("Сотрим студента", student);
students.push(student);

}



getBackendArray(): IStudent[]  {
let student: IStudent;
const students: IStudent[] = [];
console.log ("Начала запроса");
this.http.get<Student[]>("http://localhost:3000/students")
.subscribe(response => {
  console.log ("Сам запрос:", response);
  for (const element of response) {
    console.log ("Студент с бека:", students);
    student = {
      name: element.name,
      middleName: element.middleName,
      surname: element.surname,
      averageMark: element.averageMark,
      _id: element._id,
      dateOfBirth: element.dateOfBirth,
    };

    console.log ("Студент:", students);
    students.push(student);
  }
}, errors => {
  this.router.navigate(["/page-404"]);
});


console.log ("Вывод:", students);
return students;
}

*/
