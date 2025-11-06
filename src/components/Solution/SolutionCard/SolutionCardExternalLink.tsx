import { appConfig } from "@/configs/appConfig";
import { Solution } from "@/services/Solution/types";
import { Tooltip } from "@base-ui-components/react";
import { CodeXmlIcon } from "lucide-react";
import { TextTooltip } from "../../Tooltip/TextTooltip";

interface SolutionCardExternalLinkProps {
  solution: Solution;
}

export const SolutionCardExternalLink = ({ solution }: SolutionCardExternalLinkProps) => {
  return (
    <div className="flex gap-2 *:flex *:aspect-square *:w-8 *:items-center *:justify-center *:rounded-full">
      <Tooltip.Provider>
        <TextTooltip
          content="View code"
          trigger={
            <a
              className="bg-gray-900 px-1.5 text-white inset-ring inset-ring-gray-800 transition-opacity hover:opacity-50 dark:inset-ring-gray-500"
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
              className="block bg-white px-2 inset-ring inset-ring-gray-200 transition-opacity hover:opacity-50 dark:inset-ring-gray-500"
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
  );
};
