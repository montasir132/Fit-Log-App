import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="container mx-auto mt-16 border-t border-[#1A1D24] px-4 sm:px-6 lg:px-8">
            <section className="flex flex-col items-center justify-between gap-5 py-8 text-center sm:py-10 md:flex-row md:text-left">
                {/* Footer logo */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 rounded-lg px-2 py-1 transition"
                    >
                        <Image
                        src="/footer.png"
                        alt="FITLOG"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                        />

                        <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                        FITLOG
                        </h1>
                    </Link>
                </div>
                {/* Copyright section */}
                <div className="text-sm text-[#6B7280] sm:text-base">
                    <p>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>

            </section>
        </footer>
    );
};

export default Footer;
