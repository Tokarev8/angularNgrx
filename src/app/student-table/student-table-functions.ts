import { Student } from "./student";


// sort ////////////////////////////////////////////////////////////////
export function sName (array: Student[], surname: boolean): Student[] {
  if (surname !== true) {
    array.sort((a, b) => a.surname > b.surname ? 1 : -1);
  } else {
    array.sort((a, b) => a.surname < b.surname ? 1 : -1);
  }
  return array;
}

export function names (array: Student[], name: boolean): Student[] {
  if (name !== true) {
    array.sort((a, b) => a.name > b.name ? 1 : -1);
  } else {
    array.sort((a, b) => a.name < b.name ? 1 : -1);
  }
  return array;
}

export function mName (array: Student[], middleName: boolean): Student[] {
  if (middleName !== true) {
    array.sort((a, b) => a.middleName > b.middleName ? 1 : -1);
  } else {
    array.sort((a, b) => a.middleName < b.middleName ? 1 : -1);
  }
  return array;
}


export function aMark (array: Student[], averageMark: boolean): Student[] {
  if (averageMark !== true) {
    array.sort((a, b) => +a.averageMark > +b.averageMark ? 1 : -1);
  } else {
    array.sort((a, b) => +a.averageMark < +b.averageMark ? 1 : -1);
  }
  return array;
}





export function dateB (array: Student[], dateOfBirth: boolean): Student[] {
  if (dateOfBirth !== true) {
    array.sort((a, b) => {
      if (+conversionOfDate(a.dateOfBirth) > +conversionOfDate(b.dateOfBirth)) {
        return 1;
      } return -1;
    });
      } else {
    array.sort((a, b) => {
      if (conversionOfDate(a.dateOfBirth) <= conversionOfDate(b.dateOfBirth)) {
        return 1;
      } return -1;
    });
    }
  return  array;
  }

export function conversionOfDate (a: string): number {
  if (a.includes(".")) {
    const arrayADot: string[] = a.split(".");
    const dateDot: Date = new Date ( +arrayADot[2] ,
      +arrayADot[1],
      +arrayADot[0]);
    return dateDot.getTime();

  }

  const arrayA = a.split("-");
  const date: Date = new Date ( +arrayA[0] ,
    +arrayA[1],
    +arrayA[2]);
  return date.getTime();

}


