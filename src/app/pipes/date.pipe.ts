import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../student-table/student";


@Pipe({
name: "datePipe"
})
export class DatePipe implements PipeTransform {
  transform(str: string): Date {
    const array = str.split(".");
    const date = new Date(+array[2], +array[1], +array[0]);
  return date;
  }
}
