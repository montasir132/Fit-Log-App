"use client";

import { createContext, ReactNode, useState } from "react";
import { IExercise } from "@/types/exerciseType";
import { IExerciseContextType } from "@/types/ExerciseContextType";
import { Bounce, toast } from "react-toastify";

export const ExerciseContext = createContext<IExerciseContextType | undefined>(
  undefined,
);
const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [addTodayPlan, setAddTodayPlan] = useState<IExercise[]>([]);
  const [saveForLater, setSaveForLater] = useState<IExercise[]>([]);

  const removeFromTodayPlan = (id: number) => {
    setAddTodayPlan((prevPlan) =>
      prevPlan.filter((exercise) => exercise.id !== id),
    );
    toast.success("Removed from today's plan", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const removeFromSaveForLater = (id: number) => {
    setSaveForLater((prevSaved) =>
      prevSaved.filter((exercise) => exercise.id !== id),
    );
    toast.success("Removed from today's plan", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const markAsDoneFromTodayPlan = (id: number) => {
    setAddTodayPlan((prevPlan) =>prevPlan.filter((exercise) => exercise.id !== id),);
            toast.success('Workout logged — nice work', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                            });
  };
  const markAsDoneFromSaveForLater = (id: number) => {
    setSaveForLater((prevPlan) =>
      prevPlan.filter((exercise) => exercise.id !== id),
    );
    toast.success('Workout logged — nice work', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                            });
  };
  const sharedData = {
    addTodayPlan,
    setAddTodayPlan,
    saveForLater,
    setSaveForLater,
    removeFromTodayPlan,
    removeFromSaveForLater,
    markAsDoneFromTodayPlan,
    markAsDoneFromSaveForLater,
  };
  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;
