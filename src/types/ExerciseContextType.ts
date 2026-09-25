import { Dispatch, SetStateAction } from "react";
import { IExercise } from "./exerciseType";

export interface IExerciseContextType {
  addTodayPlan: IExercise[];
  setAddTodayPlan: Dispatch<SetStateAction<IExercise[]>>;
  saveForLater: IExercise[];
  setSaveForLater: Dispatch<SetStateAction<IExercise[]>>;
  removeFromTodayPlan: (id: number) => void;
  removeFromSaveForLater: (id: number) => void;
  markAsDoneFromTodayPlan: (id: number) => void;
  markAsDoneFromSaveForLater: (id: number) => void;
}
