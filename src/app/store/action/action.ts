import { createAction, props } from "@ngrx/store";
import { StudentsHard } from "../service/studentshard.service";
import { IStudent } from "../state/state";

export const getArrayStudent = createAction("[Students] get students");
export const setArrayStudent = createAction( "[Students] set students",  );
export const backendActionListner = createAction( "[Students] get students",  );
export const setBackendArrayStudent = createAction("[Students] set backend students",
  props<{students: IStudent[]}>());



