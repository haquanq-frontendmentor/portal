"use client";

import { SolutionCard } from "@/components/Solution/SolutionCard/SolutionCard";
import { useSolutionStore } from "@/stores/solutionStore";

export const SolutionList = () => {
  const { getFilteredSolutions, settings, filter } = useSolutionStore();

  const handleTopicClick = (topic: string) => {
    if (filter.topics.includes(topic)) return;
    filter.addTopic(topic);
  };

  return (
    <ul className="relative z-10 mb-16 grid w-full grid-cols-[repeat(auto-fill,minmax(min(100vw-3rem,18.75rem),1fr))] gap-x-6 gap-y-10">
      {getFilteredSolutions().map((solution, index) => (
        <li key={solution.name}>
          <SolutionCard
            solution={solution}
            showDifficulty={settings.showDifficultyLevels}
            showTopics={settings.showTopics}
            onTopicClick={handleTopicClick}
          />
        </li>
      ))}
    </ul>
  );
};
