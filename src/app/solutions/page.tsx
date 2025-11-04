import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { Suspense } from "react";
import { SolutionFilter } from "./SolutionFilter";
import { SolutionList } from "./SolutionList";

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="pb-25">
        <div className="bg-gray-50/50 py-[clamp(2rem,1.0458rem+4.0712vw,3rem)] dark:bg-gray-800/50 dark:text-gray-50">
          <ContainerLayout>
            <h1 className="text-[clamp(2rem,0.0916rem+8.1425vw,4rem)] leading-[clamp(2.5rem,0.5916rem+8.1425vw,4.5rem)] font-bold">
              All solutions
            </h1>
          </ContainerLayout>
        </div>
        <ContainerLayout>
          <Suspense>
            <SolutionFilter />
          </Suspense>
          <SolutionList />
        </ContainerLayout>
      </div>
    </main>
  );
}
