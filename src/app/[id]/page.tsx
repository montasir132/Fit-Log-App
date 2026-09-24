import { IExercise } from "@/types/exercise";
import ExerciseLibrary from "../components/api/apifetch";
import ExerciseLibDetailsCard from "../components/workouts/ExerciseLibDetailsCard";

interface ExerciseLibDetailsProps {
  params: Promise<{
    id: string;
  }>;
}
const ExerciseLibDetailsPage = async ({ params }: ExerciseLibDetailsProps) => {
  const { id } = await params;
  //   console.log(id);
  const exerciseData = await ExerciseLibrary(); // fetch
  //   console.log(BooksData);
  const exercise = exerciseData.find(
    (exercise) => String(exercise.id) === String(id),
  ) as IExercise;
  //   console.log(exercise);
  return <ExerciseLibDetailsCard exercise={exercise} />;
};

export default ExerciseLibDetailsPage;
