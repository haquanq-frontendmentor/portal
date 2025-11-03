import { DifficultyLevels, Solution } from "@/services/Solution/types";
import { create } from "zustand";

interface SolutionState {
    solutions: Solution[];
    topics: string[];
    filterTopics: string[];
    filterDifficultyLevels: DifficultyLevels[];
}

interface SolutionAction {
    setSolutions: (solutions: Solution[]) => void;
    setTopics: (topics: string[]) => void;
    getFilteredSolutions: () => Solution[];
    addDifficultyLevelFilter: (difficultyLevel: DifficultyLevels) => void;
    removeDifficultyLevelFilter: (difficultyLevel: DifficultyLevels) => void;
    clearDifficultyLevelFilter: () => void;
    addTopicFilter: (topic: string) => void;
    removeTopicFilter: (topic: string) => void;
    clearTopicFilter: () => void;
}

const useSolutionStore = create<SolutionState & SolutionAction>()((set, get) => ({
    solutions: [],
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
    topics: [],
    setTopics: (topics) => {
        set({ topics });
    },
    filterTopics: [],
    addTopicFilter: (topic) => {
        set((v) => ({ ...v, filterTopics: [...v.filterTopics, topic] }));
    },
    removeTopicFilter: (topic) => {
        set((state) => ({ filterTopics: state.filterTopics.filter((v) => v !== topic) }));
    },
    clearTopicFilter: () => {
        set({ filterTopics: [] });
    },
    setSolutions: (solutions: Solution[]) => {
        set({ solutions });
    },
    filterDifficultyLevels: [],
    addDifficultyLevelFilter: (difficultyLevel) => {
        set((state) => ({ filterDifficultyLevels: [...state.filterDifficultyLevels, difficultyLevel] }));
    },
    removeDifficultyLevelFilter: (difficultyLevel) => {
        set((state) => ({ filterDifficultyLevels: state.filterDifficultyLevels.filter((v) => v !== difficultyLevel) }));
    },
    clearDifficultyLevelFilter: () => {
        set({ filterDifficultyLevels: [] });
    },
}));

export { useSolutionStore, type SolutionAction, type SolutionState };
