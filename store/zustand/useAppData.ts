import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppState {
    email: string,
    isLogged: boolean,
    query: string,
    updateEmail?: (newEmail: string) => void,
    updateLogin?: (isLogged: boolean) => void,
    updateQuery?: (query: string) => void,
    reset?: () => void
}

const initialState: AppState = {
    email: "",
    isLogged: false,
    query: "",
}

export const useAppDataStore = create<AppState>()(
    persist(
        (set) => ({
            ...initialState,
            updateEmail: (email) => set({ email }),
            updateLogin: (isLogged) => set({ isLogged }),
            updateQuery: (query) => set({ query }),
            reset: () => set(initialState)
        }),
        { name: "app-data" },
    ),
)