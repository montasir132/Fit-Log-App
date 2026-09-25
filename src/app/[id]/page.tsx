import ExerciseLibrary from "../components/api/apifetch";
import ExerciseLibDetailsCard from "../components/workouts/ExerciseLibDetailsCard";
import { notFound } from "next/navigation";

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
    (exercise) => String(exercise.id) === String(id)
  );
  if (!exercise) {
    notFound();
  }
  return <ExerciseLibDetailsCard exercise={exercise} />;
};

export default ExerciseLibDetailsPage;
