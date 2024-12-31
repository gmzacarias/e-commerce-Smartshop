import {BrandHeader,BrandFooter,SmartPhone,CartContainer,CountContainer,CartText,Cart,User,Login,Logout,Hamburguer,CloseHamburguer,Trash,Github,Linkedin,Gmail,Sun,Moon,Motorola,Samsung,Xiaomi} from "./styles"



export function BrandHeaderIcon() {
    return <BrandHeader />
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

/*Purchase by brand */
export function MotorolaIcon(){
    return <Motorola/>
}

export function SamsungIcon(){
    return <Samsung/>
}

export function XiaomiIcon(){
return <Xiaomi/>
}


/*Header*/
export function SunIcon(){
    return <Sun/>
}

export function MoonIcon(){
    return <Moon/>
}


/*Footer*/
export function BrandFooterIcon() {
    return <BrandFooter />
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