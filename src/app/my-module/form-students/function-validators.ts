import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";



// Проверка на фамилию, имя и отчество

export class MyValidators {

  static surnameFV(control: FormControl): { [key: string]: boolean } | null {
    const regexp: RegExp = /^[а-яё]+$/iu;
    if (regexp.test(control.value)) {
      return null;
    }
    return {incorrect: true};
  }


// Проверка на средний балл
  static ballFV2(control: FormControl): { [key: string]: boolean } | null {
    if (+control.value > 5 || +control.value < 2) {
      return {bmBall: true};
    }
    return null;
  }


  // Проверка даты
  static dateFV(control: FormControl): { [key: string]: boolean } | null {
    if (control.value !== null) {

      const a: string[] = control.value?.split("-");

      const dateNow: Date = new Date();
      const year: number = +dateNow?.getFullYear();
      const moth: number = +dateNow?.getMonth() + 1;
      const day: number = +dateNow?.getDate();

      if (+a[0] > (year - 10)) {
        return {ErrorDate: true};
      } if ( +a[0] === (year - 10) ) {
          if ( +a[1] > moth ) {
            return {ErrorDate: true};
          }
          if (+a[1] === moth ) {
            if (+a[2] > day) {
              return {ErrorDate: true};
            }
            return null;
          }
        return null;
      }
    }
    return null;
  }



  static nameV(control: AbstractControl): ValidationErrors | null {
    if (control.value.name?.toLowerCase() === control.value.surname?.toLowerCase()
      || control.value.name?.toLowerCase() === control.value.middleName?.toLowerCase()) {
      return {nameError: "Имя не может совпадать с фамилией или отчество"};
    }
    return null;
  }

  static surnameV(control: AbstractControl): ValidationErrors | null {

    if (control.value.surname?.toLowerCase() === control.value.name?.toLowerCase()
      || control.value.surname?.toLowerCase() === control.value.middleName?.toLowerCase()) {
      return {surnameError: "Фамилия не может совпадать с отчеством или именем"};
    }
    return null;
  }

  static middleNameV(control: AbstractControl): ValidationErrors | null {
    if (control.value.middleName?.toLowerCase() === control.value.name?.toLowerCase()
      || control.value.middleName?.toLowerCase() === control.value.surname?.toLowerCase()) {
      return {middleNameError: "Отчество не может совпадать с фамилией или именем"};
    }
    return null;
  }





}

