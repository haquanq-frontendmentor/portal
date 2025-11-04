"use client";

import { appConfig } from "@/configs/appConfig";
import { DIFFICULTY_LEVLES } from "@/services/Solution/constants";
import { DifficultyLevels, Solution } from "@/services/Solution/types";
import { useSolutionStore } from "@/stores/solutionStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SolutionFilterDifficultyLevel } from "./SolutionFilterDifficultyLevel";
import { SolutionFilterName } from "./SolutionFilterName";
import { SolutionFilterTopic } from "./SolutionFilterTopic";

export const SolutionFilter = () => {
  const { setSolutions, setTopics, getFilteredSolutions, solutions, filter } = useSolutionStore();

  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    fetch(`${appConfig.basePath}/data.json`)
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

  useEffect(() => {
    const difficultyLevelsSearchParam = params.get("difficulty")?.split(",") as DifficultyLevels[];
    const topicsSearchParam = params.get("topics")?.split(",") as string[];

    if (difficultyLevelsSearchParam) {
      const areEqual =
        difficultyLevelsSearchParam.length === filter.difficultyLevels.length &&
        difficultyLevelsSearchParam.every((lvl) => filter.difficultyLevels.includes(lvl));
      if (areEqual) return;
      filter.clearAllDifficultyLevels();
      difficultyLevelsSearchParam.forEach((difficultyLevel) => {
        if (Object.values(DIFFICULTY_LEVLES).includes(difficultyLevel)) {
          filter.addDifficultyLevel(difficultyLevel);
        }
      });
    }

    if (topicsSearchParam) {
      const areEqual =
        topicsSearchParam.length === filter.topics.length &&
        topicsSearchParam.every((lvl) => filter.topics.includes(lvl));
      if (areEqual) return;
      filter.clearAllTopics();
      topicsSearchParam.forEach((topic) => {
        filter.addTopic(topic);
      });
    }
  }, [params]);

  useEffect(() => {
    let uri = "";
    if (filter.difficultyLevels.length !== 0) {
      uri += "?difficulty=" + filter.difficultyLevels.join(",");
    }
    if (filter.topics.length !== 0) {
      const separator = filter.difficultyLevels.length !== 0 ? "&" : "?";
      uri += separator + "topics=" + filter.topics.join(",");
    }
    router.push(pathname + uri);
  }, [filter]);

  return (
    <div className="flex flex-col gap-8 pt-10 pb-15">
      <SolutionFilterTopic />
      <div className="flex flex-wrap justify-between gap-4">
        <SolutionFilterName />
        <SolutionFilterDifficultyLevel />
      </div>
      <p className="text-gray-500">
        Showing {getFilteredSolutions().length} of {solutions.length} solutions
      </p>
    </div>
  );
};
