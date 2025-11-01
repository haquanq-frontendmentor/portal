import { GithubIcon } from "@/icons/GithubIcon";
import { ContainerLayout } from "../layouts/ContainerLayout";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="relative bg-white">
      <ContainerLayout>
        <div className="flex items-center justify-between py-5">
          <a
            className="text-xl font-bold text-gray-900"
            href="https://github.com/haquanq"
            target="_blank"
            aria-label="Haquanq Github"
          >
            @haquanq
          </a>
          <div className="flex items-center gap-3 md:grow">
            <Nav />
            <a
              className="block"
              href="https://github.com/haquanq-frontendmentor"
              target="_blank"
              aria-label="Organization repository"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};
