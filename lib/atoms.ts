import { atom, useRecoilState, useRecoilValue, selector, useSetRecoilState, useResetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
})


const appData = atom({
    key: "appData",
    default: {
        email: "",
        isLogged: false,
        query: "",
    },
    effects_UNSTABLE: [persistAtom]
})

const userData = atom({
    key: "userData",
    default: {
        email: "",
        userName: "",
        address: "",
        phoneNumber: 0,
    },
    effects_UNSTABLE: [persistAtom]
})

const myCart = atom({
    key: 'myCart',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

const addItemCart = selector({
    key: 'addToCart',
    get: ({ get }) => {
        const cart = get(myCart);
        return cart;
    },
    set: ({ set }, newItem) => {
        set(myCart, (prevCart) => [...prevCart, newItem]);
    },
});

const deleteItemCart = selector({
    key: "deleteItem",
    get: ({ get }) => {
        const cart = get(myCart);
        return cart;
    },
    set({ set, get }, itemId) {
        const cart = get(myCart)
        const updatedCart = cart.filter(item => item.id !== itemId)
        console.log("update", updatedCart)
        set(myCart, updatedCart)
    },
})

const updateQuantity = selector({
    key: "updateQuantity",
    get: ({ get }) => {
        const cart = get(myCart);
        return cart;
    },
    set: ({ get, set }, { itemId, newQuantity }) => {
        const cart = get(myCart)
        const updateCart = cart.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: newQuantity
                }
            }
            return item
        })
        // console.log("nuevo carrito", updateCart)
        set(myCart, updateCart)
    },
})






//***App***
export const useAppData = () => useRecoilState(appData)
export const useAppDataValue = () => useRecoilValue(appData)

//***User***
//state
export const useUserData = () => useRecoilState(userData)
//value
export const useUserDataValue = () => useRecoilValue(userData)
export const useSetUserData = () => useSetRecoilState(userData)

//***Cart***
//state
export const useCart = () => useRecoilState(myCart)
//add item
export const useAddItem = () => useSetRecoilState(addItemCart)
// delete item
export const useDeleteItem = () => useSetRecoilState(deleteItemCart)
// reset
export const useReset = () => useResetRecoilState(myCart)
// update quantity
export const useUpdateQuantity = () => useSetRecoilState(updateQuantity)