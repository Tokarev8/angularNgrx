import {  Injectable } from "@angular/core";
import { Student } from "../student";


@Injectable()
export class EditStudentFormService {

  public serverOn: string = "";
  public addForms: boolean = false;
  public array: Student[] = [];
  public endingElement: Student = new Student();

}
