import { IExercise } from "@/types/exercise";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaFire, FaRegClock, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface myPlanCardProps {
    exercise: IExercise;
}
const MyPlanCard = ({exercise,}: myPlanCardProps) => {
    const {id, image, name, duration, equipment, caloriesBurned, rating} = exercise
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-[#292d34] bg-[#191c21] p-4 md:p-5">
        {/* Image */}
            <Image
                src={image}
                alt={name}
                width={150}
                height={96}
                className="h-24 w-36 shrink-0 rounded-xl object-cover"
            />

        {/* Information */}
            <div className="flex-1">
                <h2 className="text-xl font-bold uppercase text-white">
                {name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                {equipment}
                </p>

                <div className="mt-2 flex items-center gap-4 text-sm">
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
            <div className="flex items-center gap-3">
                <Link href={`/${id}`}>
                    <button className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black">View Details</button>
                </Link>

                <button
                // onClick={() => onDone(id)}
                className="flex items-center gap-2 rounded-full bg-[#c2f800] px-4 py-2 text-sm font-semibold text-black"
                >
                <FaCheck />
                Mark as Done
                </button>

                <button
                // onClick={() => onRemove(id)}
                className="text-2xl text-gray-300 hover:text-white"
                >
                <IoClose />
                </button>
            </div>
        </div>
    );
};

export default MyPlanCard;