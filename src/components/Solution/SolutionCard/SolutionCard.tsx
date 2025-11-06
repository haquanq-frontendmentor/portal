"use client";

import { Solution } from "@/services/Solution/types";
import { SolutionCardExternalLink } from "./SolutionCardExternalLink";
import { SolutionCardPreview } from "./SolutionCardPreview";
import { SolutionCardTopicList } from "./SolutionCardTopicList";

interface SolutionCardProps {
  solution: Solution;
  showTopics?: boolean;
  showDifficulty?: boolean;
}

export const SolutionCard = ({ solution, showTopics = false, showDifficulty = false }: SolutionCardProps) => {
  if (solution.colors.brand === "") solution.colors.brand = "#222";

  return (
    <div className="flex h-full flex-col rounded-xl bg-gray-50/50 inset-ring inset-ring-gray-100 dark:bg-gray-800/50 dark:inset-ring-gray-700">
      <SolutionCardPreview solution={solution} />
      <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-700">
        <div className="flex items-center justify-between gap-5 p-4">
          <div className="flex flex-col gap-2 text-gray-900 dark:text-gray-50">
            {showDifficulty && (
              <p className="pt-2 text-xs tracking-widest uppercase">{solution.frontendmentor.difficulty}</p>
            )}
            <p className="font-semi-bold text-base leading-6 tracking-tight">{solution.name}</p>
          </div>
          <SolutionCardExternalLink solution={solution} />
        </div>
        {showTopics && <SolutionCardTopicList solution={solution} />}
      </div>
    </div>
  );
};
