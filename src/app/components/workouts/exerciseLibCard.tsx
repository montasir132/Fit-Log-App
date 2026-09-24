import { IExercise } from '@/types/exercise';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaFire, FaStar } from 'react-icons/fa';

interface IExerciseLibCardProps {
    exercise: IExercise;
}
const ExerciseLibCard = ({exercise}:IExerciseLibCardProps) => {
    const {image, name, muscleGroups, equipment, caloriesBurned, rating} = exercise
    return (
        <Link href='/id'>
            <div className="overflow-hidden rounded-2xl border border-[#292D35] bg-[#191C22] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C2F800]">
                {/* Image */}
                <div>
                    <Image
                    src={image}
                    alt={name}
                    width={390}
                    height={172}
                    className="relative h-75 object-cover w-full"
                    />
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Muscle Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                    {muscleGroups.map((muscle) => (
                        <span
                        key={muscle}
                        className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
                        >
                        {muscle}
                        </span>
                    ))}
                    </div>

                    {/* Exercise Name */}
                    <h2 className="text-xl font-bold uppercase text-white">
                    {name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-2 text-sm text-[#9CA3AF]">
                    {equipment}
                    </p>

                    {/* Info */}
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white">

                    <div className="flex items-center gap-1">
                        <FaClock className="text-[#C2F800]" />
                        <span>{exercise.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaFire className="text-[#C2F800]" />
                        <span>{caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-[#C2F800]" />
                        <span>{rating}</span>
                    </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ExerciseLibCard;