'use client';

import {
    createContext,
    ReactNode,
    useState,
} from "react";
import { IExercise } from "@/types/exercise";
import { IExerciseContextType } from "@/types/ExerciseContext";


export const ExerciseContext = createContext<IExerciseContextType | undefined>(undefined);
const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [addTodayPlan, setAddTodayPlan] = useState<IExercise[]>([]);
    const [saveForLater, setSaveForLater] = useState<IExercise[]>([]);
    const sharedData = { addTodayPlan, setAddTodayPlan, saveForLater, setSaveForLater }
    return (
        <ExerciseContext.Provider value={sharedData}>
        {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;