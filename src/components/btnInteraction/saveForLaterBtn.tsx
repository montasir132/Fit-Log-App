"use client";
import { ExerciseContext } from "@/context/exerciseContext";
import { IExercise } from "@/types/exerciseType";
import { Dispatch, SetStateAction, useContext } from "react";
import { Bounce, toast } from "react-toastify";

const SaveForLater = ({ exercise }: { exercise: IExercise }) => {
  const { saveForLater, setSaveForLater } = useContext(ExerciseContext) as {
    saveForLater: IExercise[];
    setSaveForLater: Dispatch<SetStateAction<IExercise[]>>;
  };

  const handleSaveForLater = () => {
    const alreadyAdded = saveForLater.some((item) => item.id === exercise.id);
    if (alreadyAdded) {
      toast.error(`Already ${exercise.name} in your saved list`, {
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
      return;
    }
    setSaveForLater([...saveForLater, exercise]);
    toast.success(`${exercise.name} Saved for later`, {
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
  console.log(saveForLater, "saveForLater");
  return (
    <button
      onClick={() => handleSaveForLater()}
      type="button"
      className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#E5E7EB] text-[#FFFFFF] text-sm font-semibold"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      Save for later
    </button>
  );
};

export default SaveForLater;
