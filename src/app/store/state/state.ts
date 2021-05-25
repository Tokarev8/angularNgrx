

export interface IStudent {
  surname: string;
  name: string;
  middleName: string;
  dateOfBirth: string;
  averageMark: string;
  _id?: string;
  __v?: string;
}







export interface StudentsArrayStay {
students: IStudent[];
}


export const initialState:StudentsArrayStay = {
  students : []
}
