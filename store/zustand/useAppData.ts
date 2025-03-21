import { create } from "zustand"
import { persist } from "zustand/middleware"

interface IAppData {
    email?: string,
    isLogged?: boolean,
    query?: string,
    updateEmail?: (newEmail: string) => void,
    updateLogin?: (isLogged: boolean) => void,
    updateQuery?: (query: string) => void
}

const useAppDataStore = create<IAppData>()(
    persist(
        (set) => ({
            email: "",
            isLogged: false,
            query: "",
            updateEmail: (email) => set({ email }),
            updateLogin: (isLogged) => set({ isLogged }),
            updateQuery: (query) => set({ query }),
        }),
        { name: "useAppDataStorage" },
    ),
)