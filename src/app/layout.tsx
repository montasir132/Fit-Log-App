import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navigation from "../components/universal/Navigation";
import Footer from "../components/universal/footer";
import ExerciseProvider from "@/context/exerciseContext";
import { Bounce, ToastContainer } from "react-toastify";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Choose the weights you need
  variable: "--font-oswald", // Optional: Define a CSS variable for Tailwind
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
        <main>
          <div>
            <ExerciseProvider>
              <Navigation />
              {children}
            </ExerciseProvider>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
