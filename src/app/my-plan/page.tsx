"use client";

import { useContext, useState } from "react";
import MyPlanHeader from "../components/myPlan/myplanHeader";
import { ExerciseContext } from "@/context/exerciseContext";
import MyPlanCard from "../components/myPlan/myPlanCard";
import { IExerciseContextType } from "@/types/ExerciseContextType";
import { IExercise } from "@/types/exerciseType";
import Link from "next/link";
import CounterStats from "../components/myPlan/counter";


const EmptyState = () => {
    return (
        <div className="rounded-2xl border border-[#252930] bg-[#171a20] px-4 py-14 text-center sm:py-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
                Nothing here yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                Browse the library and add a lift to get today moving.
            </p>

            <Link href="/">
                <button className="mt-5 rounded-2xl bg-[#c2f800] px-5 py-2.5 text-sm font-semibold text-[#252930] transition hover:bg-[#d4ff33]">
                    Go To Workout
                </button>
            </Link>
        </div>
    );
};
const MyPlanPage = () => {
    const { addTodayPlan, saveForLater, removeFromTodayPlan, removeFromSaveForLater, markAsDoneFromTodayPlan, markAsDoneFromSaveForLater,} = useContext(ExerciseContext) as IExerciseContextType;

    const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration");
    const [activeTab, setActiveTab] =useState<"today" | "saved">("today");

    const sortExercise = (exercise: IExercise[]) => {
        const sortedExercises = [...exercise];

        if (sortBy === "rating") {
            sortedExercises.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "caloriesBurned") {
            sortedExercises.sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        } else {
            sortedExercises.sort((a, b) => b.duration - a.duration);
        }

        return sortedExercises;
    };

    const sortedAddTodayPlan = sortExercise(addTodayPlan);
    const sortedSaveForLater = sortExercise(saveForLater);
    const activeExercises = activeTab === "today" ? sortedAddTodayPlan : sortedSaveForLater;

    return (
        <section className="min-h-screen bg-[#0d0f12] py-6 sm:py-8 lg:py-10">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <MyPlanHeader />
                {/* Stats */}
                <div className="mt-6 sm:mt-8">
                    <CounterStats exercises={activeExercises} />
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:mt-8 md:flex-row md:items-center md:justify-between">
                    {/* Tabs */}
                    <div className="w-full rounded-2xl border border-[#24282e] bg-[#171a20] p-1 sm:w-fit">
                        <div className="grid grid-cols-2 sm:flex">
                            <button onClick={() => setActiveTab("today")} 
                                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition sm:px-5 sm:py-3 ${
                                    activeTab === "today" 
                                        ? "bg-[#1d242c] text-[#c2f800]" 
                                        : "text-gray-400 hover:text-white"
                                    }`}>
                                {`Today's Plan`}
                                <span className="ml-2 text-xs">
                                    ({addTodayPlan.length})
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab("saved")}
                                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition sm:px-5 sm:py-3 ${
                                    activeTab === "saved"
                                        ? "bg-[#1d242c] text-[#c2f800]"
                                        : "text-gray-400 hover:text-white"
                                }`}>
                                Saved
                                <span className="ml-2 text-xs">
                                    ({saveForLater.length})
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* Sort */}
                    <div className="flex w-full items-center gap-3 sm:w-auto">
                        <label htmlFor="sort" className="shrink-0 text-sm font-medium text-white">
                            Sort By
                        </label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) =>{
                                setSortBy(
                                    e.target.value as "duration" | "caloriesBurned" | "rating"
                                )}
                            }
                            className="h-10 min-w-0 flex-1 rounded-xl border border-[#363b43] bg-[#171a20] px-3 text-sm text-white outline-none focus:border-[#c2f800] sm:w-60 sm:flex-none">
                            <option
                                value="duration"
                                className="bg-[#171a20] text-white">
                                Duration
                            </option>
                            <option
                                value="caloriesBurned"
                                className="bg-[#171a20] text-white">
                                Calories Burned
                            </option>
                            <option
                                value="rating"
                                className="bg-[#171a20] text-white">
                                Rating
                            </option>
                        </select>
                    </div>
                </div>
                {/* Content */}
                <div className="mt-6 sm:mt-8">
                    {/* Today's Plan */}
                    { activeTab === "today" && (
                        <>
                            { sortedAddTodayPlan.length > 0 
                                ? ( 
                                <div className="space-y-4">
                                    {sortedAddTodayPlan.map((exercise: IExercise) => (
                                            <MyPlanCard
                                                key={exercise.id}
                                                exercise={exercise}
                                                onMarkDone={() =>
                                                    markAsDoneFromTodayPlan(exercise.id)
                                                }
                                                onRemove={() =>
                                                    removeFromTodayPlan(exercise.id)
                                                }
                                            />
                                        )
                                    )}
                                </div>
                            ) : (
                                <EmptyState />
                            )}
                        </>
                    )}

                    {/* Saved */}
                    {activeTab === "saved" && (
                        <>
                            {sortedSaveForLater.length > 0 
                            ? (
                                <div className="space-y-4">
                                    {sortedSaveForLater.map((exercise: IExercise) => (
                                            <MyPlanCard
                                                key={exercise.id}
                                                exercise={exercise}
                                                onMarkDone={() =>
                                                    markAsDoneFromSaveForLater(exercise.id)
                                                }
                                                onRemove={() =>
                                                    removeFromSaveForLater(exercise.id)
                                                }
                                            />
                                        )
                                    )}
                                </div>
                            ) : (
                                <EmptyState />
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyPlanPage;