import { Appreciation } from "./Appreciation";
import { Intro } from "./Intro";
import { SolutionShowcase } from "./SolutionShowcase";
import { Tooling } from "./Tooling";

export default async function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Intro />
      <Tooling />
      <SolutionShowcase />
      <Appreciation />
    </main>
  );
}
