"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    const navLink = (
        <>
        <li>
            <Link
            href="/"
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
                pathname === "/"
                ? "text-[#CCFF00]"
                : "text-[#D1D5DB] hover:text-[#CCFF00]"
            }`}
            >
            Workouts
            </Link>
        </li>

        <li>
            <Link
            href="/my-plan"
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
                pathname === "/my-plan"
                ? "text-[#CCFF00]"
                : "text-[#D1D5DB] hover:text-[#CCFF00]"
            }`}
            >
            My Plan
            </Link>
        </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#1C1F26] backdrop-blur-md">
            <div className="navbar container mx-auto min-h-20 px-4 sm:px-6 lg:px-8">
                {/* Mobile menu + Logo */}
                <div className="navbar-start gap-2">
                {/* Mobile menu */}
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
                        className="menu dropdown-content z-100 mt-3 w-52 rounded-xl border border-[#1C1F26] p-3 shadow-2xl"
                        >
                        {navLink}
                        </ul>
                    </div>

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-lg px-2 py-1 transition"
                >
                    <Image
                    src="/logo.png"
                    alt="FITLOG"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                    />

                    <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                    FITLOG
                    </h1>
                </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-2">{navLink}</ul>
                </div>

                {/* Right side */}
                <div className="navbar-end">
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Plan */}
                    <Link
                    href="/my-plan"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        pathname === "/my-plan"
                        ? " text-[#CCFF00]"
                        : "text-[#D1D5DB] hover:text-[#CCFF00]"
                    }`}
                    >
                    Plan
                    </Link>

                    {/* Saved */}
                    <Link
                    href="/saved"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        pathname === "/saved"
                        ? " text-[#CCFF00]"
                        : "text-[#D1D5DB] hover:text-[#CCFF00]"
                    }`}
                    >
                    Saved
                    </Link>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
