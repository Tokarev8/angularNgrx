import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { studentsSelector } from "../store/selectors/selectors";
import { EditStudentFormService } from "./service/edit-student-form.service";
import { StudentTableServiceFormAdd } from "./service/from-form.service";
import { StudentHardService } from "./service/student-hard.service";
import { StudentTableService } from "./service/student-table.service";
import { Student } from "./student";
import { aMark, conversionOfDate, dateB, mName, names, sName } from "./student-table-functions";

import { backendActionListner, getArrayStudent, setArrayStudent, setBackendArrayStudent } from "../store/action/action";

@Component({
  selector: "student-table",
  templateUrl : "./student-table.component.html",
  styleUrls: ["./student-table.component.scss"],

   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentTableComponent implements OnInit {


  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute,
              public serviceForm: StudentTableServiceFormAdd,
              private hardStudents: StudentHardService,
              private editStudent: EditStudentFormService,
              private store: Store) {


}


  //  ngrx


  public originalStudents$ = this.store.select(studentsSelector);









////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  public stream$ = new Observable<Student[]>((observer) => {
    setInterval(() => {
      observer.next(this.array);
    }, 300);
  });


  public subscription = this.stream$.subscribe({
    next: (value => {
    })
  });
  //////////////////////////////////////////////////////////////////////////////////////////



// dla url
  public debug: boolean = true;



  public arrayOrigin: Student[] = [];
  public array: Student[] = [];
  public serverOn: string = "";



  private surname: boolean = false;
  private name: boolean = false;
  private middleName: boolean = false;
  private dateOfBirth: boolean = false;
  private averageMark: boolean = false;
  public lowMark: boolean = true;
  public studentName: string | undefined;

  // directive
  public tumbler: boolean = true;
  public str1: string = "?????????????????? ???????????? ?????????????????? ???? ???????? ????????????????";
  public str2: string = "?????????????????? ???????????? ?????????????????? ???? ???????????????? ??????????";
  public str3: string = "?????????????????? ???????????????? ?? ???????????? ????????????????";
  public str4: string = "???????????????????????? ?????????????? ????????????, ?????????????????? ?????? ?????????????? ???????? ???????????? 3";
  public str5: string = "???????????????? ???????????? ???????????? ????????????, ?????? ???????????????????? ????????";
  public str6: string = "???????????????????????? ?????????? ???? ??????????????, ?? ?????????????? ????????????";
  public mainstr: string = "";






  public deleteElement: Student = new Student();
  close: boolean = false;

  // for pipe
  public studentSurname: string = "";

// filter
  public fromDateB: string = "";
  public beforeDateB: string = "";
  public fromPoints: string = "";
  public beforePoints: string = "";



  // form
  endingElement: Student = new Student() ;
  closeForm: boolean = false;
  addForms: boolean = false;



  setArrayStudent (): void {

    this.store.dispatch(setArrayStudent());

  }

  getArrayStudent (): void {

     this.store.dispatch(getArrayStudent());

    this.store.dispatch(backendActionListner());

  }

///////////////////////////////////////////////////////////////////////////






  ngOnInit(): void {
    const studentService: StudentTableService = new StudentTableService(this.http, this.hardStudents, this.router);



// ???????? ?? ??????????????
this.route.queryParams.subscribe((params: Params) => {
  this.arrayOrigin = studentService.getArray(this.arrayOrigin, params.debug);
  this.array = studentService.getArray(this.arrayOrigin, params.debug);
   this.serverOn = params.debug;
});



  }



  closeForms(): void {
    this.closeForm = false;
    this.addForms = false;

  }

// ???????????????????? ?? ????????????
  addForm(): void {

    this.serviceForm.serverOn = this.serverOn;
    this.serviceForm.addForms = true;
    this.serviceForm.array = this.array;
  }

  EditingForm(element: Student): void {
    if (+element.averageMark !== 5) {
      this.editStudent.endingElement = element;
      this.editStudent.addForms = this.addForms;
      this.editStudent.serverOn = this.serverOn;
      this.editStudent.array = this.array;
      this.router.navigate(["/edit-student", element._id ]);
    }

  }


  transArrayElement(element: Student): void {
    this.addForms = false;
    for (let x of this.arrayOrigin) {
      x === this.endingElement ? x = element : x = x;
    }
  }


// ???????????????????? ???? ????????????????
  sortSurname(): void {
    this.array = sName(this.array, this.surname);
    this.surname = !this.surname;
    this.arrayOrigin = [];

  }

    sortName(): void {
      this.array = names(this.array, this.name);
      this.name = !this.name;
  }

  sortMiddleName(): void {
    this.array = mName( this.array, this.middleName);
    this.middleName = !this.middleName;
  }

  sortDateB (): void {
    this.array = dateB( this.array, this.dateOfBirth);
    this.dateOfBirth = !this.dateOfBirth;
  }

  sortAverageMark (): void {

    this.array = aMark( this.array, this.averageMark);
    this.averageMark = !this.averageMark;
  }

  // ?????????????????? ?????? ???????????? ???????????? 3
  disableLowMark (): void {
    this.lowMark = !this.lowMark;
  }



  // ???????????????? ????????????????
  closeWindow (x: Student): void {
    this.deleteElement = x;
    this.close = true;
  }
  upArray (x: Student[]): void {
    this.arrayOrigin = x;
    this.array = this.arrayOrigin;
  }





  // ?????????????? ???? ???????????? ?? ???????? 2
  filterDate(): void {

    if (this.fromDateB !== "" ) {
      this.array = this.array.filter(elements => conversionOfDate(elements.dateOfBirth) >= conversionOfDate(this.fromDateB));
    }
    if (this.beforeDateB !== "") {
      this.array = this.array.filter(elements => conversionOfDate(elements.dateOfBirth) <= conversionOfDate(this.beforeDateB));
    }
  }
  returnOriginalArrayD (): void {
    this.array = this.arrayOrigin.map((elements) => elements);
    this.fromDateB = "";
    this.beforeDateB = "";
  }

  filterBall(): void {
    if (this.fromPoints !== "" ) {
      this.array = this.array.filter(elements => +elements.averageMark >= +this.fromPoints);
    }
    if (this.beforePoints !== "") {
      this.array = this.array.filter(elements => +elements.averageMark <= +this.beforePoints);
    }
  }
  returnOriginalArrayB (): void {
    this.array = this.arrayOrigin.map((elements) => elements);
    this.fromPoints = "";
    this.beforePoints = "";
  }



  public helperOff(): void {
    this.tumbler = !this.tumbler;
  }







  backendOn (toggle: boolean): void {
  }



}

