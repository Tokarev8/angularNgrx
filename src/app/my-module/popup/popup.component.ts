import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Student } from "../../student-table/student";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector     : "modal-dialog",
  templateUrl: "./popup.html",
  styleUrls: ["./popup.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDialogComponent {
  title: string = "Вы дейстительно хотите удалить элемент из таблицы ?";
  @Input() array: Student[] | undefined;
  @Input() element: Student | undefined;
  @Output() closeWindow: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() transArray: EventEmitter<Student[]> = new EventEmitter<Student[]>();


  constructor(private http: HttpClient) {
  }



  deleteElement(): void {
    if (this.array !== undefined && this.element !== undefined) {
      // если работаем с сервером то
      this.http.delete<Student>(`http://localhost:3000/students/${this.element._id}`)
        .subscribe( response => {
        });


      this.array = this.array.filter(elements => elements !== this.element);
      this.transArray.emit(this.array);
    }
  }

}
