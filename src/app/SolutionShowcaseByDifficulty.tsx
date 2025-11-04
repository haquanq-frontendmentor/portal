import { SolutionCard } from "@/components/Solution/SolutionCard";
import { DifficultyLevels, Solution } from "@/services/Solution/types";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

interface SolutionSummaryByDifficultyProps {
  difficulty: DifficultyLevels;
  solutions: Solution[];
  challengeCount: number;
}

export const SolutionSummaryByDifficulty = ({
  difficulty,
  solutions,
  challengeCount,
}: SolutionSummaryByDifficultyProps) => {
  return (
    <section className="flex flex-col items-center text-gray-900 dark:text-gray-50">
      <div className="mb-10 flex w-full flex-col gap-3">
        <h3 className="text-sm leading-6 capitalize">
          {difficulty} <span className="sr-only">challenges</span>
        </h3>
        <p className="font-semi-bold w-1/2 text-[1.75rem] leading-8 capitalize">
          {solutions.length}/{challengeCount} challenges solved.
        </p>
      </div>
      <ul className="mb-16 grid w-full grid-cols-[repeat(auto-fill,minmax(min(100vw-3rem,18.75rem),1fr))] gap-x-6 gap-y-10">
        {solutions
          .filter((v) => v.featured)
          .map((solution) => (
            <li key={solution.name}>
              <SolutionCard solution={solution} />
            </li>
          ))}
      </ul>
      <div className="flex items-center gap-4 text-gray-900 transition-opacity hover:opacity-50 dark:text-gray-50">
        <Link className="text-base underline" href={`/solutions?difficulty=${difficulty}`}>
          View all {difficulty} challenge solutions
        </Link>
        <MoveRightIcon strokeWidth={1.5} />
      </div>
    </section>
  );
};
