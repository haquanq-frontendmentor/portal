import { Tooltip } from "@base-ui-components/react";

interface TextTooltipProps {
  trigger: React.JSX.Element;
  content: string;
}

export const TextTooltip = ({ trigger, content }: TextTooltipProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={trigger} />
      <Tooltip.Portal>
        <Tooltip.Positioner className="z-50" sideOffset={8}>
          <Tooltip.Popup className="flex origin-(--transform-origin) flex-col rounded-md bg-white px-2 py-1 text-sm shadow-lg outline outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:duration-0 data-starting-style:scale-90 data-starting-style:opacity-0 dark:bg-gray-900 dark:text-gray-50 dark:outline-gray-500">
            {content}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
