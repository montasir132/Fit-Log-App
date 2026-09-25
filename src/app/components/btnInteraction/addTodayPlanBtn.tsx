"use client";
import { ExerciseContext } from "@/context/exerciseContext";
import { IExercise } from "@/types/exerciseType";
import { Dispatch, SetStateAction, useContext } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const AddTodayPlanBtn = ({ exercise }: { exercise: IExercise }) => {
  const { addTodayPlan, setAddTodayPlan } = useContext(ExerciseContext) as {
    addTodayPlan: IExercise[];
    setAddTodayPlan: Dispatch<SetStateAction<IExercise[]>>;
  };

  const handleAddTodayPlan = () => {
    const alreadyAdded = addTodayPlan.some((item) => item.id === exercise.id);
    if (alreadyAdded) {
      toast.error(`${exercise.name} This exercise is already in your plan`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    setAddTodayPlan([...addTodayPlan, exercise]);
    toast.success(`${exercise.name} added to today's plan !`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  console.log(addTodayPlan, "addTodayPlan");
  return (
    <button
      onClick={() => handleAddTodayPlan()}
      type="button"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#CCFF00] text-[#0F1115] text-sm font-semibold"
    >
      <FaRegCalendarCheck />
      Add to today&apos;s plan
    </button>
  );
};

export default AddTodayPlanBtn;
