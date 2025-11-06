"use client";

import { Button } from "@/components/common/Button";
import { useSolutionStore } from "@/stores/solutionStore";
import { Popover, Switch } from "@base-ui-components/react";
import { SettingsIcon } from "lucide-react";
import { useId } from "react";

export const SolutionFilterSetting = () => {
  const showSettingLabelId = useId();
  const { setShowDifficultyLevels, setShowTopics, showDifficultyLevels, showTopics } = useSolutionStore(
    (state) => state.settings,
  );

  return (
    <Popover.Root modal="trap-focus">
      <Popover.Trigger
        render={
          <Button variant="secondary" className="size-10 p-0">
            <SettingsIcon />
          </Button>
        }
        aria-label="View settings"
      />
      <Popover.Portal>
        <Popover.Positioner className="z-50 outline-none" sideOffset={8} align="end">
          <Popover.Popup
            aria-modal="true"
            className="w-70 origin-(--transform-origin) rounded-lg bg-white p-4 text-gray-900 shadow-2xl outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 dark:bg-gray-900 dark:text-gray-50 dark:outline-gray-500"
          >
            <section className="flex flex-col gap-4">
              <p className="text-lg font-medium" id={showSettingLabelId}>
                Show
              </p>
              <ul className="flex flex-col gap-4" aria-labelledby={showSettingLabelId}>
                <li className="flex items-center justify-between">
                  <p>Solution topics</p>
                  <Switch.Root
                    checked={showTopics}
                    onCheckedChange={setShowTopics}
                    className="relative flex h-6 w-10 rounded-full bg-gray-200 p-0.5 transition-colors data-checked:bg-gray-800 data-checked:active:bg-gray-500 dark:bg-gray-700 dark:data-checked:bg-gray-200"
                  >
                    <Switch.Thumb className="aspect-square h-full rounded-full bg-white transition-transform duration-150 data-checked:translate-x-4" />
                  </Switch.Root>
                </li>
                <li className="flex items-center justify-between">
                  <p>Solution difficulty level</p>
                  <Switch.Root
                    checked={showDifficultyLevels}
                    onCheckedChange={setShowDifficultyLevels}
                    className="relative flex h-6 w-10 rounded-full bg-gray-200 p-0.5 transition-colors data-checked:bg-gray-800 data-checked:active:bg-gray-500 dark:bg-gray-700 dark:data-checked:bg-gray-200"
                  >
                    <Switch.Thumb className="aspect-square h-full rounded-full bg-white transition-transform duration-150 data-checked:translate-x-4" />
                  </Switch.Root>
                </li>
              </ul>
            </section>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
};
