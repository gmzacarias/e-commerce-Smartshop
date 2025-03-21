import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppState {
    email: string,
    isLogged: boolean,
    query: string,
    updateEmail?: (newEmail: string) => void,
    updateLogin?: (isLogged: boolean) => void,
    updateQuery?: (query: string) => void,
    resetState?: (partialReset?: Partial<AppState>) => void
}

const initialState: AppState = {
    email: "",
    isLogged: false,
    query: "",
}

export const useAppDataStore = create<AppState>()(
    persist(
        (set, get) => ({
            ...initialState,
            updateEmail: (email) => set({ email }),
            updateLogin: (isLogged) => set({ isLogged }),
            updateQuery: (query) => set({ query }),
            resetState: (partialReset = {}) => set({ ...get(), ...partialReset })
        }),
        { name: "app-data" },
    ),
)