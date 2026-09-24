import { IExercise } from '@/types/exercise';
import Image from 'next/image';
import { FaRegCalendarCheck } from 'react-icons/fa';
interface IExerciseLibDetailsProps {
    exercise: IExercise;
}
const ExerciseLibDetailsCard = ({ exercise }: IExerciseLibDetailsProps) => {
    const {
        image,
        name,
        muscleGroups,
        equipment,
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions,
    } = exercise;

    const stats: { label: string; value: string | number }[] = [
        { label: 'Equipment', value: equipment },
        { label: 'Difficulty', value: difficulty },
        { label: 'Sets', value: sets },
        { label: 'Reps', value: reps },
        { label: 'Duration', value: `${duration} min` },
        { label: 'Calories', value: `${caloriesBurned} kcal` },
        { label: 'Rating', value: rating },
    ];

    return (
        <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start max-w-6xl mx-auto">
                {/* Image */}
                <div className="w-full h-105 lg:h-190 rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={760}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide uppercase">
                            {name}
                        </h1>
                        <p className="mt-3 text-[#9CA3AF] text-sm sm:text-base">
                            {description}
                        </p>
                    </div>

                    {/* Muscle group tags */}
                    <div className="flex flex-wrap gap-4">
                        {muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="px-3 py-1 rounded-full bg-[#CCFF00] text-[#0F1115] text-xs font-semibold">
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Stats table */}
                    <div
                        className="rounded-xl overflow-hidden border border-[#1F2229]">
                        {
                        stats.map((stat) => (
                            <div key={stat.label} className={"flex items-center justify-between border-b px-4 py-3 bg-[#0F1115]"}>
                                <span className="text-[#9CA3AF] text-xs font-semibold tracking-wide uppercase">
                                    {stat.label}
                                </span>
                                <span className="text-[#E5E7EB] text-sm font-medium">
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <div>
                        <h2 className="text-[#FFFFFF] text-lg sm:text-xl font-bold uppercase tracking-wide">
                            Instructions
                        </h2>
                        <ol className="mt-3 flex flex-col gap-2">
                            {instructions.map((step, i) => (
                                <li
                                    key={i}
                                    className="text-[#D1D5DB] text-sm sm:text-base"
                                >
                                    {i + 1}. {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <button
                            type="button"
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#CCFF00] text-[#0F1115] text-sm font-semibold">
                            <FaRegCalendarCheck />
                            Add to today&apos;s plan
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#E5E7EB] text-[#FFFFFF] text-sm font-semibold">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseLibDetailsCard;
