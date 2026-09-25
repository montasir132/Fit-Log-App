import ExerciseLibrary from "../components/api/apiFetch";
import ExerciseLibCard from "../components/workouts/exerciseLibCard";
import WorkoutsLibrary from "../components/workouts/Library";

export default async function Home() {
  const ExerciseLib = await ExerciseLibrary();
  // console.log(ExerciseLib);
  return (
    <main className="container mx-auto">
      <section className="rounded-2xl my-8 md:my-12 bg-[#15171D]">
        <WorkoutsLibrary />
      </section>

      <section className="my-8">
        <div id="ExerciseLibCard" className="mb-8 p-4 ">
          <h2 className="text-white text-4xl font-bold leading-tight">
            THE LIBRARY
          </h2>
          <p className="text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ExerciseLib.map((exercise) => (
            <ExerciseLibCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>
    </main>
  );
}
