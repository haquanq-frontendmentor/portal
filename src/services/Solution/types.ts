import { DIFFICULTY_LEVLES } from "./constants";

export type DifficultyLevels = (typeof DIFFICULTY_LEVLES)[keyof typeof DIFFICULTY_LEVLES];

export type Solution = {
    name: string;
    featured: boolean;
    live: string;
    colors: {
        brand: string;
    };
    images: {
        preview: string;
    };
    frontendmentor: {
        difficulty: DifficultyLevels;
        solutionUrl: string;
        challengeUrl: string;
    };
    repository: {
        name: string;
        url: string;
        createdAt: Date;
        updatedAt: Date;
    };
    topics: string[];
};
