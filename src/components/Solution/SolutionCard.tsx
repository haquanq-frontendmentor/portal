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
        className="block aspect-384/282 overflow-hidden rounded-xl border-2"
        style={{
          borderColor: `rgba(${hexToRgb(solution.colors.brand).join(",")},0.5)`,
          boxShadow:
            solution.colors.brand !== ""
              ? `0 4px 24px -12px rgba(${hexToRgb(solution.colors.brand).join(",")}, 0.75)`
              : undefined,
        }}
        href={solution.live}
        target="_blank"
        aria-label="View live site"
      >
        <img src={solution.images.preview} alt="" />
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
