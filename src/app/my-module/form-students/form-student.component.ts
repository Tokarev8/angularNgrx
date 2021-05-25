import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StudentTableServiceFormAdd } from "../../student-table/service/from-form.service";
import { StudentHardService } from "../../student-table/service/student-hard.service";
import { Student } from "../../student-table/student";
import { FormStudentService } from "./form-student.service";
import {  MyValidators } from "./function-validators";

@Component({
  selector     : "form-student",
  templateUrl: "./form-student.component.html",
  styleUrls: ["./form-student.component.scss"],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormStudentComponent implements OnInit {

  public form: FormGroup;

  public serverOn: string ;
  public addForms: boolean ;
  public array: Student[];





  public debug: string = "";
  public title: string;
  public textButton: string;


  constructor(private http: HttpClient, private router: Router,
              private service: StudentTableServiceFormAdd,
              public hardStudent: StudentHardService) {
    this.serverOn = service.serverOn;
    this.addForms = service.addForms;
    this.array = service.array;
    this.form = new FormGroup({});
    this.title = "Добавление студента";
    this.textButton = "Добавить";
  }


  ngOnInit(): void {

  if (this.serverOn === "true") {
    // this.navigation = "?debug=true";
    this.debug = "debug";
  }


    const sn: string = "";
    const n: string = "";
    const mn: string = "";
    const bd: string = "";
    const am: string = "";





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
    // this.form.
    if (this.form !== undefined) {
      if (this.form.valid) {
// редактируем элемент
        const a: string[] = this.form?.value?.dateOfBirth?.split("-");
        const strDate: string = a[2] + "." + a[1] + "." + a[0];

// добавляем элемент
          const newStudent = new Student(
            this.form?.get("fio")?.value.surname,
            this.form?.get("fio")?.value.name,
            this.form?.get("fio")?.value.middleName,
            strDate,
            this.form?.value.averageMark);
           this.hardStudent.arrayOrigin.push(newStudent);



          // server
          if (this.serverOn === "true") {
            const x: FormStudentService = new FormStudentService(this.http, this.router);
            x.addNewStudent(newStudent);

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




