import { ActionType, createAction, createReducer, on } from "@ngrx/store";
import { backendActionListner, getArrayStudent, setArrayStudent, setBackendArrayStudent } from "../action/action";
import { StudentsHard } from "../service/studentshard.service";
import { initialState, IStudent, StudentsArrayStay } from "../state/state";


export const studentsReducer = createReducer(
  initialState,
  on(setArrayStudent, (state: StudentsArrayStay, actions ) => {
    return {...state,
    students: StudentsHard()};
  }),
  on(getArrayStudent, (state: StudentsArrayStay ) => {
    return {...state}; } ),
  on(backendActionListner, (state: StudentsArrayStay ) => {
    return {...state}; } ),
  on(setBackendArrayStudent, (state, actions) => {
    return {...state,
    students: actions.students};
  }),

);

/*
  on(setBackendArrayStudent, (state: StudentsArrayStay, actions: ActionType<any>) => {
    return {...state,
      students: getBackendArray()}; } ),
 */
