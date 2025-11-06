import { DifficultyLevels, Solution } from "@/services/Solution/types";
import { create } from "zustand";

interface SolutionStore {
    solutions: Solution[];
    setSolutions: (solutions: Solution[]) => void;
    getFilteredSolutions: () => Solution[];
    topics: string[];
    setTopics: (topics: string[]) => void;
    filter: {
        topics: string[];
        addTopic: (topic: string) => void;
        removeTopic: (topic: string) => void;
        clearAllTopics: () => void;
        difficultyLevels: DifficultyLevels[];
        addDifficultyLevel: (difficultyLevel: DifficultyLevels) => void;
        removeDifficultyLevel: (difficultyLevel: DifficultyLevels) => void;
        clearAllDifficultyLevels: () => void;
        solutionName: string;
        setSolutionName: (name: string) => void;
    };
    settings: {
        showTopics: boolean;
        setShowTopics: (value: boolean) => void;
        showDifficultyLevels: boolean;
        setShowDifficultyLevels: (value: boolean) => void;
    };
}

const useSolutionStore = create<SolutionStore>()((set, get) => ({
    solutions: [],
    setSolutions: (solutions: Solution[]) => {
        set({ solutions });
    },
    getFilteredSolutions: () => {
        const { solutions, filter } = get();
        return solutions.filter((v) => {
            const topicSet = new Set(v.topics);
            const hasFilteredDifficultyLevels =
                filter.difficultyLevels.length !== 0
                    ? filter.difficultyLevels.includes(v.frontendmentor.difficulty)
                    : true;

            const hasFilteredNameMatch =
                v.name.replace("-", " ").toLowerCase().indexOf(filter.solutionName.toLowerCase()) !== -1;

            const hasFilteredTopics = filter.topics.every((v) => topicSet.has(v));
            return hasFilteredTopics && hasFilteredDifficultyLevels && hasFilteredNameMatch;
        });
    },
    topics: [],
    setTopics: (topics) => {
        set({ topics });
    },
    filter: {
        solutionName: "",
        setSolutionName: (name) => {
            set((state) => ({ filter: { ...state.filter, solutionName: name } }));
        },
        topics: [],
        addTopic: (topic) => {
            set((state) => ({ filter: { ...state.filter, topics: [...state.filter.topics, topic] } }));
        },
        removeTopic: (topic) => {
            set((state) => ({ filter: { ...state.filter, topics: state.filter.topics.filter((v) => v !== topic) } }));
        },
        clearAllTopics: () => {
            set((state) => ({ filter: { ...state.filter, topics: [] } }));
        },
        difficultyLevels: [],
        addDifficultyLevel: (difficultyLevel) => {
            set((state) => ({
                filter: { ...state.filter, difficultyLevels: [...state.filter.difficultyLevels, difficultyLevel] },
            }));
        },
        removeDifficultyLevel: (difficultyLevel) => {
            set((state) => ({
                filter: {
                    ...state.filter,
                    difficultyLevels: state.filter.difficultyLevels.filter((v) => v !== difficultyLevel),
                },
            }));
        },
        clearAllDifficultyLevels: () => {
            set((state) => ({ filter: { ...state.filter, difficultyLevels: [] } }));
        },
    },
    settings: {
        showTopics: false,
        setShowTopics: (value) => {
            set((state) => ({ settings: { ...state.settings, showTopics: value } }));
        },
        showDifficultyLevels: false,
        setShowDifficultyLevels(value) {
            set((state) => ({ settings: { ...state.settings, showDifficultyLevels: value } }));
        },
    },
}));

export { useSolutionStore, type SolutionStore };
