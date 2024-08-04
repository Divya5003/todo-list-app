import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Tasks from "@/components/Tasks";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("all");

  return (
    <>
      <Navbar />
      <div className="w-3/4 m-4 mx-auto flex justify-between">
        <Search handleSearch={(newValue) => setValue(newValue)} />
        <Filter handleFilter={(status) => setStatus(status)} />
      </div>
      <Tasks searchValue={value} status={status} />
    </>
  );
}
