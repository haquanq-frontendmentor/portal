"use client";

import { Solution } from "@/$types/Solution";
import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { useSolutionStore } from "@/stores/solutionStore";
import { useEffect } from "react";
import { SolutionSummaryByDifficulty } from "./SolutionShowcaseByDifficulty";

interface SolutionShowcaseProps {
  solutions: Solution[];
  topics: string[];
}

export const SolutionShowcase = ({ solutions, topics }: SolutionShowcaseProps) => {
  const solutionStore = useSolutionStore();

  useEffect(() => {
    solutionStore.setSolutions(solutions);
    solutionStore.setTopics(topics);
  }, []);

  const challengeDifficultyLevels = [
    {
      name: "advanced",
      count: 16,
    },
    {
      name: "intermediate",
      count: 30,
    },
    {
      name: "junior",
      count: 41,
    },
    {
      name: "newbie",
      count: 26,
    },
  ];

  return (
    <section>
      <ContainerLayout>
        <div className="pt-25 pb-40 sm:pt-40">
          <div className="mb-20 flex flex-col items-center gap-4 text-center sm:mb-30 sm:gap-8">
            <h2 className="text-[clamp(2rem,0.0916rem+8.1425vw,4rem)] leading-[clamp(2.5rem,0.5916rem+8.1425vw,4.5rem)] font-bold text-gray-900">
              Solutions
            </h2>
            <div className="h-0.5 w-12 bg-gray-900 sm:w-20"></div>
          </div>
          <div className="flex flex-col gap-25">
            {challengeDifficultyLevels.map((v) => (
              <SolutionSummaryByDifficulty
                challengeCount={v.count}
                solutions={solutions.filter((solution) => solution.frontendmentor.difficulty === v.name)}
                difficulty={v.name}
                key={v.name}
              />
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};
