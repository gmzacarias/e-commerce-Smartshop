import styled from "styled-components"
import { LoginIcon, LogoutIcon, TrashIcon } from "ui/icons"
import { useAppDataValue } from "lib/atoms"

type buttonProps = {
    children?: string | any,
    type?: "button" | "reset" | "submit",
    onClick?: (e) => void | any,

}

const Button = styled.button`
  width:fit-content;
  min-width: 150px;
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:5px;
  font-family:var(--font-family-Montserrat);
  font-size: 16px;
  cursor: pointer;
  `
const ButtonPages = styled(Button)`
        @media screen and (min-width:400px) {
    &{
        width: 250px;
    }
}

@media screen and (min-width:1000px){
    &{
        width: 350px;
    }
}


`
const Card = styled(Button)`
width:100px;
min-width: unset;;
`
const Primary = styled(ButtonPages)`
    color:var(--green);
`
const Secondary = styled(ButtonPages)`
    color:var(--success);
`
const Default = styled(ButtonPages)`
   background-color:var(--warning);
   margin-top: 10px;
`

const Outlined = styled(ButtonPages)`
  border: solid 2px var(--primary);
  width: 120px;
  min-width: unset;
`

const Count = styled(Button)`
    width:20px ;
    height: 20px;
    background-color:var(--primary);
    min-width: unset;
    padding-bottom: 10px;
    color: var(--white);
    border-radius: 50%;
`
const TrashIconContainer = styled.div`
    display: flex;
    width: 20px;
    height: 20px;

`

/*Button Login/Logout */
const Session = styled.button`
   background: none;
   border:none;
   border-radius: 4px;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content:center;
   align-items: center;
   padding:5px 10px;
   font-family:var(--font-family-Montserrat);
   color: var(--grey);
   cursor: pointer;
   
  &:hover {
       color:var(--dark-grey)
  }
`

export function LoginButton({ onClick, type, children }: buttonProps) {
    return (
        <Session type={type} onClick={onClick}>
            <LoginIcon></LoginIcon>
            {children}
        </Session>
    )
}

export function LogoutButton({ onClick, type, children }: buttonProps) {
    return (
        <Session type={type} onClick={onClick} >
            <LogoutIcon />
            {children}
        </Session>
    )
}







export function DefaultButton({ onClick, type, children }: buttonProps) {
    return <Default type={type} onClick={onClick}>{children}</Default>
}




export function OutlinedButton({ onClick, type, children }: buttonProps) {
    return <Outlined type={type} onClick={onClick}>{children}</Outlined>
}

export function CardButton({ onClick, type, children }: buttonProps) {
    return <Card type={type} onClick={onClick}>{children}</Card>
}

export function CountButton({ onClick, type, children }: buttonProps) {
    return <Count type={type} onClick={onClick}>{children}</Count>
}

export function TrashButton({ onClick }: buttonProps) {
    return (
        <TrashIconContainer onClick={onClick} >
            <TrashIcon />
        </TrashIconContainer>
    )
}