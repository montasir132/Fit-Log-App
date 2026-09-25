import { IExercise } from "@/types/exerciseType";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaFire, FaRegClock, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface MyPlanCardProps {
    exercise: IExercise;
    onMarkDone: () => void;
    onRemove: () => void;
}

const MyPlanCard = ({exercise,onMarkDone,onRemove}: MyPlanCardProps) => {
    const { id, image, name, duration, equipment, caloriesBurned, rating} = exercise;

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-[#292d34] bg-[#191c21] p-4 sm:p-5 md:flex-row md:items-center">
            {/* Image */}
            <Image
                src={image}
                alt={name}
                width={150}
                height={96}
                className="
                    h-48
                    w-full
                    rounded-xl
                    object-cover
                    sm:h-56
                    md:h-24
                    md:w-36
                    md:shrink-0
                "
            />

            {/* Information */}
            <div className="min-w-0 flex-1">

                <h2 className="truncate text-lg font-bold uppercase text-white sm:text-xl">
                    {name}
                </h2>

                <p className="mt-1 truncate text-sm text-gray-400">
                    {equipment}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">

                    <span className="flex items-center gap-1 text-white">
                        <FaRegClock className="text-[#c2f800]" />
                        {duration} min
                    </span>

                    <span className="flex items-center gap-1 text-white">
                        <FaFire className="text-[#c2f800]" />
                        {caloriesBurned} Kcal
                    </span>

                    <span className="flex items-center gap-1 text-white">
                        <FaStar className="text-[#c2f800]" />
                        {rating}
                    </span>

                </div>
            </div>

            {/* Actions */}
            <div className="flex w-full items-center gap-2 sm:gap-3 md:w-auto">

                {/* View Details */}
                <Link
                    href={`/${id}`}
                    className="flex-1 md:flex-none"
                >
                    <button
                        className="
                            w-full
                            whitespace-nowrap
                            rounded-full
                            border
                            border-white
                            px-3
                            py-2
                            text-xs
                            font-medium
                            text-white
                            transition
                            hover:bg-white
                            hover:text-black
                            sm:px-4
                            sm:text-sm
                        "
                    >
                        View Details
                    </button>
                </Link>

                {/* Mark as Done */}
                <button
                    onClick={onMarkDone}
                    className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        whitespace-nowrap
                        rounded-full
                        bg-[#c2f800]
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        text-black
                        transition
                        hover:bg-[#d4ff33]
                        sm:px-4
                        sm:text-sm
                        md:flex-none
                    "
                >
                    <FaCheck />
                    <span>Mark as Done</span>
                </button>

                {/* Remove */}
                <button
                    onClick={onRemove}
                    aria-label="Remove exercise"
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-xl
                        text-gray-300
                        transition
                        hover:bg-[#292d34]
                        hover:text-white
                    "
                >
                    <IoClose />
                </button>

            </div>
        </div>
    );
};

export default MyPlanCard;