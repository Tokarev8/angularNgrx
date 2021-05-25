import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EditStudentFormService } from "../../student-table/service/edit-student-form.service";
import { StudentHardService } from "../../student-table/service/student-hard.service";
import { Student } from "../../student-table/student";
import { FormStudentService } from "../form-students/form-student.service";
import {  MyValidators } from "../form-students/function-validators";

@Component({
  selector     : "form-student",
  templateUrl: "../form-students/form-student.component.html",
  styleUrls: ["../form-students/form-student.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditStudentComponent implements OnInit {

  public form: FormGroup;
  public serverOn: string ;
  public addForms: boolean ;
  public array: Student[];
  public endingElement: Student;





  public debug: string = "";
  public title: string;
  public textButton: string;


  constructor(private http: HttpClient, private router: Router,
              public hardStudent: StudentHardService,
              public editStudent: EditStudentFormService) {
    this.title = "Редактировать студента";
    this.textButton = "Сохранить";
    this.serverOn = editStudent.serverOn;
    this.addForms = editStudent.addForms;
    this.array = editStudent.array;
    this.endingElement = editStudent.endingElement;
    this.form = new FormGroup({});

  }


  ngOnInit(): void {

    if (this.serverOn === "true") {
      // this.navigation = "?debug=true";
      this.debug = "debug";
    }


    const a: string[] = this.endingElement.dateOfBirth.split(".");

    const strDate: string = a[2] + "-" + a[1] + "-" + a[0];
    const sn = this.endingElement.surname;
    const n = this.endingElement.name;
    const mn = this.endingElement.middleName;
    const bd = strDate;
    const am = this.endingElement.averageMark;





    this.form = new FormGroup({
      fio: new FormGroup({
        surname: new FormControl(sn, [Validators.required, MyValidators.surnameFV]),
        name: new FormControl(n, [Validators.required, MyValidators.surnameFV]),
        middleName: new FormControl(mn, [Validators.required, MyValidators.surnameFV]),
      }, [MyValidators.nameV.bind(this),
        MyValidators.surnameV.bind(this),
        MyValidators.middleNameV.bind(this)]),

      dateOfBirth: new FormControl(bd, [Validators.required, MyValidators.dateFV]),
      averageMark: new FormControl(am, [Validators.required, MyValidators.ballFV2]),
    });
  }



  submit(): void {

    if (this.form !== undefined) {
      if (this.form.valid) {
// редактируем элемент
        const a: string[] = this.form?.value?.dateOfBirth?.split("-");
        const strDate: string = a[2] + "." + a[1] + "." + a[0];

        this.endingElement.name = this.form?.get("fio")?.value.name;
        this.endingElement.surname = this.form?.get("fio")?.value.surname;
        this.endingElement.middleName = this.form?.get("fio")?.value.middleName;
        this.endingElement.dateOfBirth = strDate;
        this.endingElement.averageMark = this.form?.value.averageMark;

        for (let element of this.hardStudent.arrayOrigin) {
          if (element === this.editStudent.endingElement) {
            element = this.endingElement;
          }
        }



        // server
        if (this.serverOn === "true") {
          const x: FormStudentService = new FormStudentService(this.http, this.router);
          x.changeStudent(this.endingElement);

        }








        // this.router.navigate([this.debug]);
        // this.router.par

      }
    }


  }


  closeWindow(): void {

    this.router.navigate([`${this.debug}`]);
  }
}









