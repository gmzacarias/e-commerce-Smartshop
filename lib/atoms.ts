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

export const productsData = atom({
    key: "productsData",
    default: {
        id: "",
        photo: "",
        model: "",
        brand: "",
        colour: "",
        price: "",
        quantity: 0,
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
    set: ({ set, get }, newItem) => {
        const productsDataValue = get(productsData);
        const existingProduct = get(cartAtom).findIndex(item => item.id === productsDataValue.id)
        if (existingProduct !== -1) {
            set(cartAtom, (prevCart) => {
                const updatedCart = [...prevCart];
               updatedCart[existingProduct].quantity += 1
               console.log("update",updatedCart[existingProduct].quantity += 1) 
               return updatedCart;
            });
        } else {
            const itemToAdd = { ...productsDataValue, ...newItem, quantity: 1 };
            set(cartAtom, (prevCart) => [...prevCart, itemToAdd]);
        }

    },
});




export const useAppData = () => useRecoilState(appData)
export const useAppDataValue = () => useRecoilValue(appData)
export const useUserData = () => useRecoilState(userData)
export const useUserDataValue = () => useRecoilValue(userData)
export const useProductsData = () => useRecoilState(productsData)

export const useSetProductsData = () => useSetRecoilState(productsData)
export const useSetCart = () => useSetRecoilState(cartAtom)
export const useSetUserData = () => useSetRecoilState(userData)
export const useSetToCart = () => useSetRecoilState(addToCart)