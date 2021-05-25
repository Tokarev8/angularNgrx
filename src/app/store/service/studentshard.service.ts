


import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Student } from "../../student-table/student";
import { IStudent } from "../state/state";


export function StudentsHard(): IStudent[] {
  const array: IStudent[] = [];


  array.push({surname: "Иванов", name: "Михаил",
    middleName: "Игоревич", dateOfBirth: "25.05.2000",
    averageMark: "4.4"});

  array.push({surname: "Петров", name: "Андрей",
    middleName: "Михайлович", dateOfBirth: "01.01.2001",
    averageMark: "2.5"});

  array.push({surname: "Желонкин", name: "Евгений",
    middleName: "Григорьевич", dateOfBirth: "06.10.2002",
    averageMark: "4.5"});

  array.push({surname: "Бойка", name: "Александр",
    middleName: "Александрович", dateOfBirth: "29.04.2003",
    averageMark: "4.2"});

  array.push({surname: "Колесов", name: "Виталий",
    middleName: "Витальевич", dateOfBirth: "08.09.2004",
    averageMark: "3.9"});

  array.push({surname: "Гришутин", name: "Артём",
    middleName: "Алексеевич", dateOfBirth: "04.12.2005",
    averageMark: "2.9"});

  array.push({surname: "Яшуков", name: "Алексей",
    middleName: "Максимович", dateOfBirth: "28.12.1999",
    averageMark: "3.3"});


  return array;
}


/*

  x = new Student("Иванов", "Михаил", "Игоревич", "25.05.2000", "4.4");
  array.push(x);

  x = new Student("Петров", "Андрей", "Михайлович", "26.05.2000", "2.5");
  array.push(x);

  x = new Student("Желонкин", "Евгений", "Григорьевич", "27.05.2000", "4.5");
  array.push(x);

  x = new Student("Бойка", "Александр", "Александрович", "29.04.1998", "4.2");
  array.push(x);

  x = new Student("Колесов", "Виталий", "Витальевич", "08.09.1997", "3.9");
  array.push(x);

  x = new Student("Гришутин", "Артём", "Алексеевич", "04.12.1996", "2.9");
  array.push(x);

  x = new Student("Яшуков", "Алексей", "Максимович", "28.12.1995", "3.3");
  array.push(x);


  x = new Student("Яшуков", "Алексей", "Максимович", "28.12.1995", "3.3");
  array.push(x);


  x = new Student("Яшуков", "Алексей", "Максимович", "28.12.1995", "3.3");
  array.push(x);


  x = new Student("Яшуков", "Алексей", "Максимович", "28.12.1995", "3.3");
  array.push(x);
 */

