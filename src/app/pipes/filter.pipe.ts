import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../student-table/student";


@Pipe({
name: "filterSurname"
})
export class FilterPipe implements PipeTransform {

  transform(value: Student[], surname: string ): Student[] {
    if (surname === "") { return value; }

  return value.filter((elem) => elem.surname.toLowerCase().includes(surname.toLowerCase()) );
  }
}
