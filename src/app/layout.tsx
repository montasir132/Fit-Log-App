import type { Metadata } from "next";
import { Oswald } from 'next/font/google';
import "./globals.css";
import Navigation from "./components/universal/Navigation";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Choose the weights you need
  variable: '--font-oswald',     // Optional: Define a CSS variable for Tailwind
});


export const metadata: Metadata = {
  title: "Fit Log App",
  description: "Track your fitness journey with Fit Log App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="black"
      className={`${oswald.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="">
          <Navigation/>
        </main>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
