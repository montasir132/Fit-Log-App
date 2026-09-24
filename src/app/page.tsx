import WorkoutsLibrary from "./components/workouts/Library";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className='rounded-2xl my-8 md:my-12 bg-[#15171D]'>
            <WorkoutsLibrary/>
        </section>
    </main>
  );
}
