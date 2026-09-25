"use client";

import { ExerciseContext } from "@/context/exerciseContext";
import { IExerciseContextType } from "@/types/ExerciseContextType";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navigation = () => {
    const {addTodayPlan, saveForLater,} = useContext(ExerciseContext) as IExerciseContextType;
    const pathname = usePathname();
    const navLink = (
        <>
        <li><Link href="/" className={`px-4 py-2 rounded-full transition-all duration-200 ${ pathname === "/" ? "text-[#CCFF00]" : "text-[#D1D5DB] hover:text-[#CCFF00]" }`} > Workouts </Link></li>


        <li> <Link href="/my-plan" className={`px-4 py-2 rounded-full transition-all duration-200 ${ pathname === "/my-plan" ? "text-[#CCFF00]" : "text-[#D1D5DB] hover:text-[#CCFF00]" }`} > My Plan </Link></li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0F1115CC] border-b border-[#1B1F28] backdrop-blur-md">
            <div className="navbar container mx-auto min-h-20 px-4 sm:px-6 lg:px-8">
                <div className="navbar-start gap-2">
                        <div className="dropdown lg:hidden">
                            <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-square text-white"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            </div>

                            <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-100 mt-3 w-52 rounded-xl bg-[#0F1115CC] border border-[#1B1F28] p-3 shadow-2xl"
                            >
                            {navLink}
                            </ul>
                        </div>

                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-lg px-2 py-1 transition"
                    >
                        <Image
                        src="/logo.png"
                        alt="FITLOG"
                        width={24}
                        height={24}
                        className="h-8 w-8 object-contain"
                        />

                        <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                        FITLOG
                        </h1>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-2">{navLink}</ul>
                </div>

                <div className="navbar-end">
                <div className="flex items-end md:items-center gap-2 sm:gap-4">
                    <Link
                        href="/my-plan"
                        className="group flex items-center gap-2 py-2 transition-all duration-200 hover:border-[#CCFF00]"
                    >
                        <span className="text-sm font-medium text-white group-hover:text-[#CCFF00]">
                            Plan
                        </span>
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#CCFF00] px-1.5 text-xs font-bold text-black">
                            {addTodayPlan.length}
                        </span>
                    </Link>
                    <Link
                        href="/my-plan"
                        className="group flex items-center gap-2  py-2 transition-all duration-200 hover:border-white"
                    >
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                            Saved
                        </span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-500 bg-black px-1.5 text-xs font-bold text-white">
                            {saveForLater.length}
                        </span>
                    </Link>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
