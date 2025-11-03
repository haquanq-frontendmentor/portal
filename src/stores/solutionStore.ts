import { DifficultyLevels, Solution } from "@/services/Solution/types";
import { create } from "zustand";

interface SolutionState {
    solutions: Solution[];
    topics: string[];
    filterTopics: string[];
    filterDifficulty: DifficultyLevels | null;
}

interface SolutionAction {
    addTopicFilter: (topic: string) => void;
    setSolutions: (solutions: Solution[]) => void;
    setTopics: (topics: string[]) => void;
    setDifficultyFilter: (difficulty: DifficultyLevels) => void;
}

const useSolutionStore = create<SolutionState & SolutionAction>()((set, get) => ({
    solutions: [],
    filterTopics: [],
    addTopicFilter: (topic) => {
        set((v) => ({ ...v, filterTopics: [...v.filterTopics, topic] }));
    },
    setSolutions: (solutions: Solution[]) => {
        set({ solutions });
    },
    topics: [],
    setTopics: (topics) => {
        set({ topics });
    },
    filterDifficulty: null,
    setDifficultyFilter: (difficulty) => {
        set({ filterDifficulty: difficulty });
    },
    getFilteredSolutions: () => {
        const state = get();
        return state.solutions.filter((v) => {
            const topicSet = new Set(v.topics);
            return (
                state.filterTopics.every((v) => topicSet.has(v)) &&
                v.frontendmentor.difficulty === state.filterDifficulty
            );
        });
    },
}));

export { useSolutionStore, type SolutionAction, type SolutionState };
