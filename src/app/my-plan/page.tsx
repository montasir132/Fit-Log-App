"use client";

import React, { useContext, useState } from "react";
import MyPlanHeader from "../components/myPlan/myplanHeader";
import { ExerciseContext } from "@/context/exerciseContext";
import { IExercise } from "@/types/exercise";
import MyPlanCard from "../components/myPlan/myPlanCard";

const MyPlanPage = () => {
    const { addTodayPlan, saveForLater } = useContext(
        ExerciseContext
    ) as {
        addTodayPlan: IExercise[];
        saveForLater: IExercise[];
    };

    const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration");

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

        const sortExercise = (exercise: IExercise[]) => {
        const sortedExercises = [...exercise];
        if (sortBy === "rating") {
            sortedExercises.sort((a, b) => b.rating - a.rating);
        } 
        else if (sortBy === "caloriesBurned") {
            sortedExercises.sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        } 
        else if (sortBy === "duration") {
            sortedExercises.sort((a, b) => b.duration - a.duration);
        }

        return sortedExercises;
    };

    const sortedAddTodayPlan = sortExercise(addTodayPlan);
    const sortedSaveForLater = sortExercise(saveForLater);

    return (
        <section className="min-h-screen bg-[#0d0f12] py-10">
            <div className="container mx-auto px-4">
                <MyPlanHeader />
                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex w-fit items-center rounded-2xl border border-[#24282e] bg-[#171a20] p-1">
                        <button
                        onClick={() => setActiveTab("today")}
                        className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                            activeTab === "today"
                            ? "bg-[#1d242c] text-[#c2f800]"
                            : "text-gray-400 hover:text-white"
                        }`}
                        >
                        Today&apos;s Plan
                        </button>

                        <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-xl px-5 py-3 text-sm font-medium transition ${
                            activeTab === "saved"
                            ? "bg-[#1d242c] text-[#c2f800]"
                            : "text-gray-400 hover:text-white"
                        }`}
                        >
                        Saved
                        </button>
                    </div>

                    {/* Sort */}
                    <div className="w-full flex justify-between md:w-80">
                        <label
                        htmlFor="sort"
                        className="mb-1 block text-sm font-medium text-white">
                            Sort By
                        </label>

                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                e.target.value as
                                    | "duration"
                                    | "caloriesBurned"
                                    | "rating"
                                )
                            }
                            className="h-10 w-full rounded-xl border border-[#363b43] bg-transparent px-3 text-sm text-white outline-none focus:border-[#c2f800]"
                            >
                            <option
                                value="duration"
                                className="bg-[#171a20] text-white"
                            >
                                Duration
                            </option>

                            <option
                                value="caloriesBurned"
                                className="bg-[#171a20] text-white"
                            >
                                Calories Burned
                            </option>

                            <option
                                value="rating"
                                className="bg-[#171a20] text-white"
                            >
                                Rating
                            </option>
                        </select>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-8">

                {/* Today's Plan */}
                {activeTab === "today" && (
                    <div>
                    {sortedAddTodayPlan.length > 0 ? (
                        <div className="space-y-4">
                        {sortedAddTodayPlan.map((exercise: IExercise) => (
                            <MyPlanCard
                            key={exercise.id}
                            exercise={exercise}
                            />
                        ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-[#252930] bg-[#171a20] py-16 text-center">
                        <h2 className="text-xl font-semibold text-white">
                            No exercises added
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Add some exercises to your today&apos;s plan.
                        </p>
                        </div>
                    )}
                    </div>
                )}

                {/* Saved */}
                {activeTab === "saved" && (
                    <div>
                        {sortedSaveForLater.length > 0 ? (
                            <div className="space-y-4">
                                {sortedSaveForLater.map((exercise: IExercise) => (
                                    <MyPlanCard
                                    key={exercise.id}
                                    exercise={exercise}
                                    />
                                ))}
                            </div>
                        ) : (
                        <div className="rounded-2xl border border-[#252930] bg-[#171a20] py-16 text-center">
                            <h2 className="text-xl font-semibold text-white">
                            No saved exercises
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                            Exercises saved for later will appear here.
                            </p>
                        </div>
                        )}
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyPlanPage;