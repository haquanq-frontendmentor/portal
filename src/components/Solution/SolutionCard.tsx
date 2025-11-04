"use client";

import { appConfig } from "@/configs/appConfig";
import { Solution } from "@/services/Solution/types";
import { hexToRgb } from "@/utils/hexToRgb";
import { Tooltip } from "@base-ui-components/react";
import { CodeXmlIcon } from "lucide-react";
import { TextTooltip } from "../Tooltip/TextTooltip";

interface SolutionCardProps {
  solution: Solution;
}

export const SolutionCard = ({ solution }: SolutionCardProps) => {
  if (solution.colors.brand === "") solution.colors.brand = "#222";
  return (
    <div className="flex flex-col rounded-xl bg-white inset-ring inset-ring-gray-100 dark:bg-gray-800 dark:inset-ring-gray-700">
      <a
        className="group relative aspect-384/282 rounded-xl shadow-lg"
        href={solution.live}
        target="_blank"
        aria-label="Go to live site"
      >
        <span className="block overflow-hidden rounded-xl">
          <img
            className="transition-transform duration-500 group-hover:scale-105"
            src={solution.images.preview}
            alt=""
          />
        </span>
        <span
          className="absolute inset-0 block rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `0 4px 28px -12px rgba(${hexToRgb(solution.colors.brand).join(",")}, 0.75)`,
          }}
        ></span>
        <span className="absolute inset-0 z-10 block rounded-xl inset-ring-2 inset-ring-gray-200"></span>
        <span
          className="absolute inset-0 z-20 block rounded-xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            borderColor: `rgba(${hexToRgb(solution.colors.brand).join(",")}, 1)`,
          }}
        ></span>
      </a>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="font-semi-bold text-base leading-6 tracking-tight text-gray-900 dark:text-gray-50">
          {solution.name}
        </p>
        <div className="flex gap-2 *:flex *:aspect-square *:w-8 *:items-center *:justify-center *:rounded-full">
          <Tooltip.Provider>
            <TextTooltip
              content="View code"
              trigger={
                <a
                  className="bg-gray-900 px-1.5 text-white inset-ring inset-ring-gray-800 dark:inset-ring-gray-500"
                  href={solution.repository.url}
                  aria-label="View code"
                  target="_blank"
                >
                  <CodeXmlIcon />
                </a>
              }
            />
            <TextTooltip
              content="View solution post"
              trigger={
                <a
                  className="block bg-white px-2 inset-ring inset-ring-gray-200 dark:inset-ring-gray-500"
                  href={solution.frontendmentor.solutionUrl}
                  aria-label="View solution post"
                  target="_blank"
                >
                  <img src={`${appConfig.basePath}/logos/frontendmentor.svg`} alt="" />
                </a>
              }
            ></TextTooltip>
          </Tooltip.Provider>
        </div>
      </div>
    </div>
  );
};
