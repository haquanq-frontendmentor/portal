import { TextTooltip } from "@/components/Tooltip/TextTooltip";
import { Button } from "@/components/common/Button";
import { Solution } from "@/services/Solution/types";
import { Tooltip } from "@base-ui-components/react";

interface SolutionCardTopicListProps {
  solution: Solution;
  onTopicClick?: (topic: string) => void;
}

export const SolutionCardTopicList = ({ solution, onTopicClick }: SolutionCardTopicListProps) => {
  return (
    <div>
      <Tooltip.Provider>
        <ul className="flex flex-wrap gap-3 p-4">
          {solution.topics.map((topic) => (
            <li key={solution.name + topic}>
              <TextTooltip
                content={`Add ${topic} to filter`}
                trigger={
                  <Button
                    className="bg-gray-100 tracking-tight text-gray-600 dark:bg-gray-700"
                    type="button"
                    variant="secondary"
                    size="small"
                    aria-label={`Add ${topic} to filter`}
                    onClick={() => onTopicClick?.(topic)}
                  >
                    {`#${topic}`}
                  </Button>
                }
              />
            </li>
          ))}
        </ul>
      </Tooltip.Provider>
    </div>
  );
};
