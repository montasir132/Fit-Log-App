import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-5">
            <div className="text-center">

                <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#C2F800]">
                FITLOG
                </p>

                <h1 className="text-7xl font-extrabold text-white sm:text-9xl">
                404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-white">
                Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-[#9CA3AF]">
                The workout or page you&apos;re looking for doesn&apos;t exist.
                Let&apos;s get you back to your workout library.
                </p>

                <Link
                href="/"
                className="mt-7 inline-block rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#b5e600]"
                >
                BACK TO WORKOUTS
                </Link>

            </div>
        </main>
    );
};

export default NotFound;