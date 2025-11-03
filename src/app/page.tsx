import { getAllSolutions } from "@/services/Solution/getAllSolutions";
import { Appreciation } from "./Appreciation";
import { Intro } from "./Intro";
import { SolutionShowcase } from "./SolutionShowcase";
import { Tooling } from "./Tooling";

export default async function Home() {
  const solutions = await getAllSolutions();
  const topics = [...new Set(solutions.reduce((a, v) => a.concat(v.topics), [] as string[]))];

  return (
    <main>
      <Intro />
      <Tooling />
      <SolutionShowcase solutions={solutions} topics={topics} />
      <Appreciation />
    </main>
  );
}
