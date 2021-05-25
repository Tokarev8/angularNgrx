import {  Injectable } from "@angular/core";
import { Student } from "../student";


@Injectable()
export class StudentHardService {

  public arrayOrigin: Student[];

constructor() {
  this.arrayOrigin = f();
}





}

export function f(): Student[] {
  const array: Student[] = [];

  let x: Student = new Student("Иванов", "Михаил", "Игоревич", "25.05.2000", "4.4", "1");
  array.push(x);

  x = new Student("Петров", "Андрей", "Михайлович", "01.01.2001", "2.5");
  array.push(x);

  x = new Student("Желонкин", "Евгений", "Григорьевич", "06.10.2002", "4.5");
  array.push(x);

  x = new Student("Бойка", "Александр", "Александрович", "29.04.2003", "4.2");
  array.push(x);

  x = new Student("Колесов", "Виталий", "Витальевич", "08.09.2004", "3.9");
  array.push(x);

  x = new Student("Гришутин", "Артём", "Алексеевич", "04.12.2005", "2.9");
  array.push(x);

  x = new Student("Яшуков", "Алексей", "Максимович", "28.12.1999", "3.3");
  array.push(x);


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


  return array;
}
