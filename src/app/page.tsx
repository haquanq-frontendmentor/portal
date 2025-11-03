import { Appreciation } from "./Appreciation";
import { Intro } from "./Intro";
import { SolutionShowcase } from "./SolutionShowcase";
import { Tooling } from "./Tooling";

export default async function Home() {
  return (
    <main>
      <Intro />
      <Tooling />
      <SolutionShowcase />
      <Appreciation />
    </main>
  );
}
