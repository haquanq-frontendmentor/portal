import { Button } from "@/components/common/Button";
import { useSolutionStore } from "@/stores/solutionStore";
import { Combobox } from "@base-ui-components/react";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { CheckIcon, MinusIcon, PlusIcon, TrashIcon, XIcon } from "lucide-react";
import { useId, useRef } from "react";

export const SolutionFilterTopic = () => {
  const { topics, filter } = useSolutionStore();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputId = useId();

  const handleValueChange = (values: string[]) => {
    filter.clearAllTopics();
    values.forEach((v) => filter.addTopic(v));
  };
  return (
    <div>
      <Collapsible.Root className="flex flex-col justify-center text-gray-900">
        <Collapsible.Trigger className="group rounded-lg">
          <Button className="w-full" size="medium" variant="secondary" asWrapper>
            Filter by {filter.topics.length !== 0 && filter.topics.length} topics
            <PlusIcon className="size-5 group-aria-expanded:hidden" />
            <MinusIcon className="hidden size-5 group-aria-expanded:block" />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Panel className="flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden text-sm transition-all ease-out data-ending-style:h-0 data-starting-style:h-0">
          <div>
            <div className="h-4"></div>
            <Combobox.Root items={topics} multiple onValueChange={handleValueChange} value={filter.topics}>
              <div className="flex flex-col gap-1">
                <label className="sr-only" htmlFor={inputId}>
                  Topics
                </label>
                <Combobox.Chips
                  className="flex w-full flex-wrap items-center justify-center gap-1.5 rounded-lg p-1.5 font-medium text-gray-900 inset-ring inset-ring-gray-200 focus-within:-outline-offset-1 focus-within:outline-blue-800"
                  ref={containerRef}
                >
                  <Combobox.Value>
                    {(values: string[]) => (
                      <>
                        {values.map((value) => (
                          <Combobox.Chip
                            key={value}
                            className="flex cursor-default items-center gap-1 rounded-md bg-gray-50 py-1 pr-1 pl-2 text-gray-900 inset-ring inset-ring-gray-100 outline-none focus-within:inset-ring-gray-900"
                            aria-label={value}
                          >
                            {value}
                            <Combobox.ChipRemove
                              className="rounded-sm text-inherit hover:bg-gray-200"
                              aria-label="Remove"
                            >
                              <XIcon strokeWidth={1.5} />
                            </Combobox.ChipRemove>
                          </Combobox.Chip>
                        ))}
                        <Combobox.Input
                          id={inputId}
                          placeholder={values.length > 0 ? "" : "e.g. React"}
                          className="h-8 flex-1 rounded-md border-0 bg-transparent pl-2 text-base text-gray-900 outline-none"
                        />
                      </>
                    )}
                  </Combobox.Value>
                </Combobox.Chips>
                <div className="flex justify-center pt-2">
                  <Combobox.Clear>
                    <Button asWrapper variant="secondary" size="small">
                      Clear All
                      <TrashIcon className="size-4" />
                    </Button>
                  </Combobox.Clear>
                </div>
              </div>

              <Combobox.Portal>
                <Combobox.Positioner className="z-50 outline-none" sideOffset={16} anchor={containerRef} align="start">
                  <Combobox.Popup className="max-h-[min(var(--available-height),23rem)] w-75 origin-(--transform-origin) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-md bg-[canvas] py-2 text-gray-900 shadow-2xl outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
                    <Combobox.Empty className="px-4 py-2 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0">
                      No match
                    </Combobox.Empty>
                    <Combobox.List className="font-medium">
                      {(value: string) => (
                        <Combobox.Item
                          key={value}
                          className="flex items-center justify-between gap-2 px-4 py-2 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-2 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-gray-50"
                          value={value}
                        >
                          <div className="col-start-2">{value}</div>
                          <Combobox.ItemIndicator className="col-start-1">
                            <CheckIcon className="size-4" />
                          </Combobox.ItemIndicator>
                        </Combobox.Item>
                      )}
                    </Combobox.List>
                  </Combobox.Popup>
                </Combobox.Positioner>
              </Combobox.Portal>
            </Combobox.Root>
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  );
};
