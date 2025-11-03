"use client";

import { Solution } from "@/$types/Solution";
import { hexToRgb } from "@/utils/hexToRgb";
import { CodeXmlIcon } from "lucide-react";

interface SolutionCardProps {
  solution: Solution;
}

export const SolutionCard = ({ solution }: SolutionCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <a
        className="group relative rounded-xl"
        href={solution.live}
        target="_blank"
        style={{
          backgroundColor:
            solution.colors.brand !== "" ? `rgba(${hexToRgb(solution.colors.brand).join(",")}, 0.75)` : undefined,
          boxShadow:
            solution.colors.brand !== ""
              ? `0 4px 24px -12px rgba(${hexToRgb(solution.colors.brand).join(",")}, 0.75)`
              : undefined,
        }}
      >
        <span
          className="relative z-10 block aspect-384/282 overflow-hidden rounded-xl border-2 transition-transform duration-300 group-hover:-translate-y-8"
          style={{
            borderColor: `rgba(${hexToRgb(solution.colors.brand).join(",")},0.5)`,
          }}
        >
          <img src={solution.images.preview} alt="" />
        </span>
        <span className="absolute inset-x-0 bottom-1.75 text-center text-sm font-medium text-white" aria-hidden="true">
          Go to live site
        </span>
      </a>
      <div className="flex items-center justify-between gap-3">
        <p className="font-semi-bold text-base leading-6 tracking-tight text-gray-900">{solution.name}</p>
        <div className="flex gap-2 *:flex *:aspect-square *:w-8 *:items-center *:justify-center *:rounded-full">
          <a
            className="bg-gray-900 px-1.5 text-white"
            href={solution.repository.url}
            aria-label="View code"
            target="_blank"
          >
            <CodeXmlIcon />
          </a>

          <a
            className="block bg-white px-2 inset-ring inset-ring-gray-200"
            href={solution.frontendmentor.solutionUrl}
            aria-label="View solution post"
            target="_blank"
          >
            <img src="/logos/frontendmentor.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
