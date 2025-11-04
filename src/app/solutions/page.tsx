import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { SolutionFilter } from "./SolutionFilter";
import { SolutionList } from "./SolutionList";

export default function SolutionPage() {
  return (
    <main>
      <div className="pb-25">
        <div className="bg-gray-50 py-[clamp(2rem,1.0458rem+4.0712vw,3rem)]">
          <ContainerLayout>
            <h1 className="text-[clamp(2rem,0.0916rem+8.1425vw,4rem)] leading-[clamp(2.5rem,0.5916rem+8.1425vw,4.5rem)] font-bold">
              All solutions
            </h1>
          </ContainerLayout>
        </div>
        <ContainerLayout>
          <SolutionFilter />
          <SolutionList />
        </ContainerLayout>
      </div>
    </main>
  );
}
