import React from "react";
import AddEntry from "../components/AddEntry";
import HousingList from "../components/HousingList";

/* This example requires Tailwind CSS v2.0+ */
export default function HomePage() {
  return (
    <div>
      <div class="min-h-screen bg-blue-100">
        <h1 className="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl text-center p-8">
          Rate Waterloo Housing
        </h1>
        <HousingList />
        <div className="flex items-center flex-col mt-8">
          <AddEntry />
        </div>
      </div>
    </div>
  );
}
