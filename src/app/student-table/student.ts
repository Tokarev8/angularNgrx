

export class Student {
  public surname: string;
  public name: string;
  public middleName: string;
  public dateOfBirth: string;
  public averageMark: string;
  public _id: string;
  public __v: string;

  constructor(...args: string[]) {
    this.surname = args[0];
    this.name = args[1];
    this.middleName = args[2];
    this.dateOfBirth = args[3];
    this.averageMark = args[4];
    this._id = "";
    this.__v = "";
  }
}
