import { Dispatch, SetStateAction } from 'react';
import { IExercise } from './exercise';

export interface IExerciseContextType {
    addTodayPlan: IExercise[];
    setAddTodayPlan: Dispatch<SetStateAction<IExercise[]>>;
    saveForLater: IExercise[];
    setSaveForLater: Dispatch<SetStateAction<IExercise[]>>;
}