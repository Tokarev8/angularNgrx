import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { StudentsArrayStay } from "../state/state";
import { studentsReducer } from "./reducer";

export interface State {
  students: StudentsArrayStay;

}

export const reducers: ActionReducerMap<State> = {
  students: studentsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
