"use client";

import { Button } from "@/components/common/Button";
import { DIFFICULTY_LEVLES } from "@/services/Solution/constants";
import { DifficultyLevels } from "@/services/Solution/types";
import { useSolutionStore } from "@/stores/solutionStore";
import { Popover } from "@base-ui-components/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export const SolutionFilterDifficultyLevel = () => {
  const { clearAllDifficultyLevels, addDifficultyLevel, removeDifficultyLevel, difficultyLevels } = useSolutionStore(
    (state) => state.filter,
  );

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addDifficultyLevel(e.target.value as DifficultyLevels);
    } else {
      removeDifficultyLevel(e.target.value as DifficultyLevels);
    }
  };

  const handleClearAll = () => {
    clearAllDifficultyLevels();
  };

  return (
    <Popover.Root modal="trap-focus">
      <Popover.Trigger className="flex h-12 w-64 items-center justify-between rounded-lg px-4 font-medium text-gray-900 inset-ring inset-ring-gray-200 transition-shadow select-none hover:inset-ring-gray-900 data-popup-open:inset-ring-gray-900">
        <span>Difficulty {difficultyLevels.length !== 0 && `(${difficultyLevels.length} selected)`}</span>
        <ChevronDownIcon />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className="z-50 outline-none" sideOffset={8} align="end">
          <Popover.Popup
            aria-modal="true"
            className="w-(--anchor-width) origin-(--transform-origin) rounded-lg bg-white px-2 py-2 text-gray-900 shadow-2xl outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0"
          >
            <Button className="w-full" size="medium" variant="secondary" type="button" onClick={handleClearAll}>
              Clear all
            </Button>
            <div className="my-2 h-px bg-gray-100"></div>

            <fieldset className="flex flex-col gap-1 font-medium">
              <legend className="sr-only">Filter Difficulty Levels</legend>
              {Object.values(DIFFICULTY_LEVLES).map((level) => (
                <label
                  className="group relative flex cursor-pointer items-center gap-3 rounded-md p-2 capitalize hover:bg-gray-50"
                  key={level + "filter"}
                >
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    value={level}
                    name={level}
                    checked={difficultyLevels.includes(level)}
                    onChange={handleValueChange}
                  />
                  <span className="flex size-6 items-center justify-center rounded-sm border border-gray-900 text-gray-900 transition-colors peer-checked:bg-gray-900 peer-checked:text-white peer-checked:*:opacity-100">
                    <CheckIcon className="opacity-0 transition-opacity" width={16} height={16} />
                  </span>
                  <span className="">{level}</span>
                  <span className="absolute inset-0 rounded-md peer-focus-visible:outline-2 peer-focus-visible:outline-gray-900"></span>
                </label>
              ))}
            </fieldset>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
};
