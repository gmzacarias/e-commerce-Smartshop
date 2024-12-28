import {BrandHeader,BrandFooter,SmartPhone,CartContainer,CountContainer,CartText,Cart,User,Login,Logout,Hamburguer,CloseHamburguer,Trash,Github,Linkedin,Gmail} from "./styles"



export function BrandHeaderIcon() {
    return <BrandHeader />
}


export function BrandFooterIcon() {
    return <BrandFooter />
}


export function SmartPhoneIcon() {
    return <SmartPhone />
}

export function CartIcon({ state }) {
    if (state > 0) {
        return (
            <CartContainer >
                <CountContainer>
                    <CartText>{state}</CartText>
                </CountContainer>
                <Cart />
            </CartContainer>
        )
    } else {
        return (
            <CartContainer >
                <Cart />
            </CartContainer>
        )
    }
}

export function UserIcon() {
    return <User />
}

export function LoginIcon() {
    return <Login />
}

export function LogoutIcon() {
    return <Logout />
}

export function HamburguerIcon() {
    return <Hamburguer />
}

export function CloseHamburguerIcon() {
    return <CloseHamburguer />
}

export function TrashIcon() {
    return <Trash />
}



export function GithubIcon() {
    return <Github />
}

export function LinkedinIcon() {
    return <Linkedin />
}

export function GmailIcon() {
    return <Gmail />
}