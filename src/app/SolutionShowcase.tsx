"use client";

import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { DIFFICULTY_LEVLES } from "@/services/Solution/constants";
import { useSolutionStore } from "@/stores/solutionStore";
import { SolutionSummaryByDifficulty } from "./SolutionShowcaseByDifficulty";

export const SolutionShowcase = () => {
  const solutionStore = useSolutionStore();

  const challengeDifficultyLevels = [
    {
      name: DIFFICULTY_LEVLES.ADVANCED,
      count: 16,
    },
    {
      name: DIFFICULTY_LEVLES.INTERMEDIATE,
      count: 30,
    },
    {
      name: DIFFICULTY_LEVLES.JUNIOR,
      count: 41,
    },
    {
      name: DIFFICULTY_LEVLES.NEWBIE,
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
                solutions={solutionStore.solutions.filter((solution) => solution.frontendmentor.difficulty === v.name)}
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
