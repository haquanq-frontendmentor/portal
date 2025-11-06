"use client";

import { DIFFICULTY_LEVLES } from "@/services/Solution/constants";
import { DifficultyLevels } from "@/services/Solution/types";
import { useSolutionStore } from "@/stores/solutionStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SolutionFilterDifficultyLevel } from "./SolutionFilterDifficultyLevel";
import { SolutionFilterName } from "./SolutionFilterName";
import { SolutionFilterSetting } from "./SolutionFilterSetting";
import { SolutionFilterTopic } from "./SolutionFilterTopic";

export const SolutionFilter = () => {
  const { getFilteredSolutions, solutions, filter } = useSolutionStore();

  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

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
    router.push(pathname + uri, { scroll: false });
  }, [filter]);

  return (
    <div className="flex flex-col gap-8 pt-10 pb-15">
      <SolutionFilterTopic />
      <div className="flex flex-wrap justify-between gap-4">
        <SolutionFilterName />
        <SolutionFilterDifficultyLevel />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="text-gray-500 dark:text-gray-400">
          Showing {getFilteredSolutions().length} of {solutions.length} solutions
        </p>
        <SolutionFilterSetting />
      </div>
    </div>
  );
};
