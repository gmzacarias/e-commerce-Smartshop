import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UserDataState {
    email: string,
    userName: string,
    address: string,
    phoneNumber: number,
    updateData?: (partialData?: Partial<UserDataState>) => void
    resetData?: () => void
}

const initialState: UserDataState = {
    email: "",
    userName: "",
    address: "",
    phoneNumber:0,
}

export const useUserData = create<UserDataState>()(
    persist(
        (set, get) => ({
            ...initialState,
            updateData: (partialData = {}) => set({ ...get(), ...partialData }),
            resetData: () => { set(initialState) }
        }),
        { name: "user-data" }
    )
)
