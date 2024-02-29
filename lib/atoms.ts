import { atom, useRecoilState, useRecoilValue } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
})


export const appData = atom({
    key: "appData",
    default: {
        email: "",
        isLogged: false,
    },
    effects_UNSTABLE: [persistAtom]
})

export const userData= atom({
    key:"userData",
    default:{
        email:"",
        userName:"",
        address:"",
        phoneNumber:0,
    },
    effects_UNSTABLE: [persistAtom]
})


export const useAppData = () => useRecoilState(appData)
export const useAppDataValue = () => useRecoilValue(appData)
export const useUserData=()=>useRecoilState(userData)

