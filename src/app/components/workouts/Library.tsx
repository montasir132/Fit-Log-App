import Image from "next/image";
import Link from "next/link";

const WorkoutsLibrary = () => {
    return (
        <div className="flex flex-col items-center justify-between px-5 py-12 sm:px-8 md:flex-row md:px-10 md:py-16 lg:px-14 lg:py-18.75">

        {/* Content */}
            <div className="order-2 md:order-1 w-full">
                <p className="text-sm font-bold tracking-wide text-[#C2F800]">
                WORKOUT LIBRARY
                </p>
                <h2 className="py-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                TRAIN WITH INTENT. LOG EVERY SET.
                </h2>
                <p className="max-w-2xl pb-6 text-sm leading-6 text-[#9CA3AF] sm:text-base">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <Link href="#ExerciseLibCard">
                <button className="btn border-none bg-[#C2F800] px-6 py-3 text-black hover:bg-[#b5e600]">
                    BROWSE WORKOUTS
                </button>
                </Link>
            </div>
        {/* Image */}
            <div className="order-1 md:order-2 flex w-full justify-center md:justify-end">
                <Image
                src="/banner.png"
                alt="FitLog workout"
                width={334}
                height={334}
                />
            </div>
        </div>
    );
};

export default WorkoutsLibrary;