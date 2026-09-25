import { IExercise } from "@/types/exerciseType";

const ExerciseLibrary = async (): Promise<IExercise[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
};
export default ExerciseLibrary;
