import Navbar from "@/components/Navbar";
import Tasks from "@/components/Tasks";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Tasks />
    </>
  );
}
