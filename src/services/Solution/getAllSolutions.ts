import { Endpoints } from "@octokit/types";
import { Octokit } from "octokit";
import { Solution } from "./types";

export const getAllSolutions = async () => {
    const client = new Octokit({
        auth: process.env.NEXT_PUBLIC_GHT,
    });

    const { data } = (await client.request("GET /orgs/haquanq-frontendmentor/repos?per_page=100", {
        org: "ORG",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
        },
    })) as { data: Endpoints["GET /orgs/{org}/repos"]["response"]["data"] };

    const fetchMetadata = async (repoName: string) => {
        const res = await fetch(
            `https://raw.githubusercontent.com/haquanq-frontendmentor/${repoName}/main/portal.json`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        if (res.status !== 200) return {};

        return await res.json();
    };

    const solutions: Solution[] = [];

    for (let i = 0; i < data.length; i++) {
        const repo = data[i];
        const metadata = await fetchMetadata(repo.name);

        let temp = {
            repository: {
                name: repo.name,
                url: `https://github.com/haquanq-frontendmentor/${repo.name}`,
                createdAt: new Date(repo.created_at as string),
                updatedAt: new Date(repo.updated_at as string),
            },
            topics: repo.topics?.filter((v) => !v.startsWith("frontendmentor")) || ([] as string[]),
            colors: {
                brand: "",
            },
            featured: false,
            frontendmentor: {
                challengeUrl: "",
                difficulty: "newbie",
                solutionUrl: "",
            },
            images: {
                preview: "",
            },
            live: repo.homepage || "",
            name: "",
        } satisfies Solution;

        solutions.push({
            ...temp,
            ...metadata,
            colors: metadata["colors"] || metadata["color"] || metadata["colors:"] || temp.colors,
        });
    }

    return solutions;
};
