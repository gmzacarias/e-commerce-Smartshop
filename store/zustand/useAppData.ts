import { create } from "zustand"

interface IAppData {
    email: string,
    isLogged: boolean,
    query: string,
    updateEmail: (newEmail: string) => void,
    updateLogin?: (isLogged: boolean) => void,
    updateQuery?: (query: string) => void
}

export const useAppDataStore = create<IAppData>((set) => ({
    email: "",
    isLogged: false,
    query: "",
    updateEmail: (email) => set({ email }),
    updateLogin: (isLogged) => set({ isLogged }),
    updateQuery:(query)=>set({query})
}
)
)