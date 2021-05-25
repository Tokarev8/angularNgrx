import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StudentsArrayStay } from "../state/state";


export const featuresSelector = createFeatureSelector<StudentsArrayStay>( "students");

export const studentsSelector = createSelector(
  featuresSelector,
  (state) => state.students);
