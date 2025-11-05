"use client";

import { Solution } from "@/services/Solution/types";
import { SolutionCardExternalLink } from "./SolutionCardExternalLink";
import { SolutionCardPreview } from "./SolutionCardPreview";

interface SolutionCardProps {
  solution: Solution;
}

export const SolutionCard = ({ solution }: SolutionCardProps) => {
  if (solution.colors.brand === "") solution.colors.brand = "#222";
  return (
    <div className="flex flex-col rounded-xl bg-gray-50 inset-ring inset-ring-gray-100 dark:bg-gray-800 dark:inset-ring-gray-700">
      <SolutionCardPreview solution={solution} />
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="font-semi-bold text-base leading-6 tracking-tight text-gray-900 dark:text-gray-50">
          {solution.name}
        </p>
        <SolutionCardExternalLink solution={solution} />
      </div>
    </div>
  );
};
