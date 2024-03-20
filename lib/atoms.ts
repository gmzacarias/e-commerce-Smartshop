import { atom, useRecoilState, useRecoilValue, selector, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
})


export const appData = atom({
    key: "appData",
    default: {
        email: "",
        isLogged: false,
        query: "",
    },
    effects_UNSTABLE: [persistAtom]
})

export const userData = atom({
    key: "userData",
    default: {
        email: "",
        userName: "",
        address: "",
        phoneNumber: 0,
    },
    effects_UNSTABLE: [persistAtom]
})

export const cartAtom = atom({
    key: 'cartAtom',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const addToCart = selector({
    key: 'addToCart',
    get: ({ get }) => {
        const cart = get(cartAtom);
        return cart;
    },
    set: ({ set}, newItem) => {
        set(cartAtom, (prevCart) => [...prevCart,newItem]);
    },
});



export const useAppData = () => useRecoilState(appData)
export const useAppDataValue = () => useRecoilValue(appData)
export const useUserData = () => useRecoilState(userData)
export const useUserDataValue = () => useRecoilValue(userData)

export const useSetUserData = () => useSetRecoilState(userData)
export const useSetCart = () => useSetRecoilState(cartAtom)
export const useSetToCart = () => useSetRecoilState(addToCart)
export const useCart=()=>useRecoilState(cartAtom)
