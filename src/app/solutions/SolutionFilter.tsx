"use client";

import { DIFFICULTY_LEVLES } from "@/services/Solution/constants";
import { Solution } from "@/services/Solution/types";
import { useSolutionStore } from "@/stores/solutionStore";
import { Suspense, useEffect } from "react";
import { SolutionFilterDifficultyLevel } from "./SolutionFilterDifficultyLevel";
import { SolutionFilterName } from "./SolutionFilterName";
import { SolutionFilterTopic } from "./SolutionFilterTopic";

export const SolutionFilter = () => {
  const { setSolutions, setTopics, getFilteredSolutions, solutions, filter } = useSolutionStore();

  useEffect(() => {
    fetch("/data.json")
      .then((v) => v.json())
      .then((data) => {
        const solutions = data as Solution[];
        const topics = [...new Set(solutions.reduce((a, v) => a.concat(v.topics), [] as string[]))];
        const order = [
          DIFFICULTY_LEVLES.ADVANCED,
          DIFFICULTY_LEVLES.INTERMEDIATE,
          DIFFICULTY_LEVLES.JUNIOR,
          DIFFICULTY_LEVLES.NEWBIE,
        ];
        solutions.sort((a, b) => {
          const x = order.indexOf(a.frontendmentor.difficulty);
          const y = order.indexOf(b.frontendmentor.difficulty);
          return x - y;
        });
        setSolutions(solutions);
        setTopics(topics);
      });
  }, []);

  return (
    <div className="flex flex-col gap-8 pt-10 pb-15">
      <SolutionFilterTopic />
      <div className="flex flex-wrap justify-between gap-4">
        <SolutionFilterName />
        <Suspense>
          <SolutionFilterDifficultyLevel />
        </Suspense>
      </div>
      <p className="text-gray-500">
        Showing {getFilteredSolutions().length} of {solutions.length} solutions
      </p>
    </div>
  );
};
