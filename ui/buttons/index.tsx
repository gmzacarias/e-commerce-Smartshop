import styled from "styled-components"
import { ReactNode } from "react"
import { TrashIcon } from "ui/icons"
import {SessionButton,ToggleButton,CardBtn, FormBtn} from "./styles"

type buttonProps = {
    children?: ReactNode,
    type?: "button" | "reset" | "submit",
    onClick?: (e: any) => void | any,
    title?: string | any,

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




export function UserSessionButton({ onClick, title, children }: buttonProps) {
    return (
        <SessionButton onClick={onClick} title={title}>
            {children}
        </SessionButton>
    )
}





export function ThemeToggleButton({ onClick, title, children }: buttonProps) {
    return (
        <ToggleButton onClick={onClick} title={title}>
            {children}
        </ToggleButton>
    );


}


export function CardButton({ onClick, title, children }: buttonProps){
    return (
        <CardBtn onClick={onClick} title={title}>
            {children}
        </CardBtn>
    )
}


export function FormButton({ onClick, title, children }: buttonProps){
    return (
        <FormBtn onClick={onClick} title={title}>
            {children}
        </FormBtn>
    )
}






















export function DefaultButton({ onClick, type, children }: buttonProps) {
    return <Default type={type} onClick={onClick}>{children}</Default>
}




export function OutlinedButton({ onClick, type, children }: buttonProps) {
    return <Outlined type={type} onClick={onClick}>{children}</Outlined>
}

// export function CardButton({ onClick, type, children }: buttonProps) {
//     return <Card type={type} onClick={onClick}>{children}</Card>
// }

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