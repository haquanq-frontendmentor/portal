"use client";

import { appConfig } from "@/configs/appConfig";
import { GithubIcon } from "@/icons/GithubIcon";
import { DIFFICULTY_LEVLES } from "@/services/Solution/constants";
import { Solution } from "@/services/Solution/types";
import { useSolutionStore } from "@/stores/solutionStore";
import { useEffect } from "react";
import { ContainerLayout } from "../layouts/ContainerLayout";
import { Nav } from "./Nav";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const { setSolutions, setTopics } = useSolutionStore();

  useEffect(() => {
    fetch(`${appConfig.basePath}/data.json`)
      .then((v) => v.json())
      .then((data) => {
        const solutions = data as Solution[];
        const topics = [...new Set(solutions.reduce((a, v) => a.concat(v.topics), [] as string[]))];
        const order = [
          DIFFICULTY_LEVLES.ADVANCED,
          DIFFICULTY_LEVLES.INTERMEDIATE,
          DIFFICULTY_LEVLES.JUNIOR,
          DIFFICULTY_LEVLES.NEWBIE,
        ];
        solutions.sort((a, b) => {
          const x = order.indexOf(a.frontendmentor.difficulty);
          const y = order.indexOf(b.frontendmentor.difficulty);
          return x - y;
        });
        setSolutions(solutions);
        setTopics(topics);
      });
  }, []);

  return (
    <header className="relative z-999 bg-white dark:bg-gray-900">
      <ContainerLayout>
        <div className="flex items-center justify-between py-5 text-gray-900 sm:py-8 dark:text-gray-50">
          <a
            className="text-xl font-bold"
            href="https://github.com/haquanq"
            target="_blank"
            aria-label="Haquanq Github"
          >
            @haquanq
          </a>
          <div className="flex items-center gap-3 md:grow">
            <Nav />
            <ThemeToggle />
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
