'use client';
import { IExercise } from "@/types/exerciseType";

interface CounterStatsProps {
    exercises: IExercise[];
}

const CounterStats = ({ exercises }: CounterStatsProps) => {
    const totalExercises = exercises.length;
    const totalMinutes = exercises.reduce(
        (sum, exercise) => sum + exercise.duration,
        0
    );
    const totalCalories = exercises.reduce(
        (sum, exercise) => sum + exercise.caloriesBurned,
        0
    );
    return (
        <div className="flex divide-x divide-[#24282e] rounded-2xl border border-[#24282e] bg-[#171a20] px-6 py-5">
            <div className="flex-1 pr-6">
                <p className="text-sm text-gray-400">Exercises</p>
                <p className="mt-1 text-3xl font-extrabold text-[#c2f800]">
                    {totalExercises}
                </p>
            </div>

            <div className="flex-1 px-6">
                <p className="text-sm text-gray-400">Minutes</p>
                <p className="mt-1 text-3xl font-extrabold text-white">
                    {totalMinutes}
                </p>
            </div>

            <div className="flex-1 pl-6">
                <p className="text-sm text-gray-400">Calories</p>
                <p className="mt-1 text-3xl font-extrabold text-white">
                    {totalCalories}
                </p>
            </div>
        </div>
    );
};

export default CounterStats;