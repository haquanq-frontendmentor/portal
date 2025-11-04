"use client";

import { useSolutionStore } from "@/stores/solutionStore";
import { SearchIcon } from "lucide-react";
import { useId } from "react";

export const SolutionFilterName = () => {
  const { solutionName, setSolutionName } = useSolutionStore((state) => state.filter);
  const inputId = useId();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolutionName(e.target.value);
  };

  return (
    <div className="relative flex items-center text-gray-900 dark:text-gray-50">
      <label className="sr-only" htmlFor={inputId}>
        Search by solution name
      </label>
      <input
        className="h-12 w-[min(25rem,100vw-3rem)] rounded-lg px-4 font-medium inset-ring inset-ring-gray-200 transition-shadow placeholder:text-gray-500 hover:inset-ring-gray-900 dark:inset-ring-gray-600 dark:placeholder:text-gray-400 dark:hover:inset-ring-gray-50"
        id={inputId}
        type="text"
        value={solutionName}
        placeholder="Search by solution name..."
        onChange={handleInputChange}
      />
      <SearchIcon className="absolute right-4" />
    </div>
  );
};
