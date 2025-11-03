import { DifficultyLevels, Solution } from "@/services/Solution/types";
import { create } from "zustand";

interface SolutionState {
    solutions: Solution[];
    topics: string[];
    filterTopics: string[];
    filterDifficultyLevels: DifficultyLevels[];
}

interface SolutionAction {
    addTopicFilter: (topic: string) => void;
    setSolutions: (solutions: Solution[]) => void;
    setTopics: (topics: string[]) => void;
    addDifficultyLevelFilter: (difficultyLevel: DifficultyLevels) => void;
    getFilteredSolutions: () => Solution[];
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
    filterDifficultyLevels: [],
    addDifficultyLevelFilter: (difficultyLevel) => {
        set((state) => ({ filterDifficultyLevels: [...state.filterDifficultyLevels, difficultyLevel] }));
    },
    getFilteredSolutions: () => {
        const state = get();
        return state.solutions.filter((v) => {
            const topicSet = new Set(v.topics);
            const hasFilteredDifficultyLevels =
                state.filterDifficultyLevels.length !== 0
                    ? state.filterDifficultyLevels.includes(v.frontendmentor.difficulty)
                    : true;

            const hasFilteredTopics = state.filterTopics.every((v) => topicSet.has(v)) && hasFilteredDifficultyLevels;
            return hasFilteredTopics && hasFilteredDifficultyLevels;
        });
    },
}));

export { useSolutionStore, type SolutionAction, type SolutionState };
