"use client";

import { SolutionCard } from "@/components/Solution/SolutionCard";
import { useSolutionStore } from "@/stores/solutionStore";

export const SolutionList = () => {
  const { getFilteredSolutions } = useSolutionStore();
  return (
    <ul className="relative z-10 mb-16 grid w-full grid-cols-[repeat(auto-fill,minmax(min(100vw-3rem,18.75rem),1fr))] gap-x-6 gap-y-10">
      {getFilteredSolutions().map((solution, index) => (
        <li key={solution.name + index}>
          <SolutionCard solution={solution} />
        </li>
      ))}
    </ul>
  );
};
