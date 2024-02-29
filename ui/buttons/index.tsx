import styled from "styled-components"
import { LoginIcon, LogoutIcon } from "ui/icons"


export const Button = styled.button`
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

export const Session = styled(Button)`
    background-color:var(--grey-dark);
    color:var(--light);

    &:hover{
    background-color:var(--blue) ;
    }
`

export const ButtonPages = styled(Button)`
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

export const Primary = styled(ButtonPages)`
    color:var(--green);
`
export const Secondary = styled(ButtonPages)`
    color:var(--success);
`
export const Default = styled(ButtonPages)`
   background-color:var(--warning);
`



export function LoginButton({ onClick, children }) {
    return (
        <Session onClick={onClick}>
            <LoginIcon></LoginIcon>
            {children}
        </Session>
    )
}

export function LogoutButton({ onClick, children }) {
    return (
        <Session onClick={onClick} >
            <LogoutIcon />
            {children}
        </Session>
    )
}

export function DefaultButton({onClick,children}) {
    return <Default onClick={onClick}>{children}</Default>
}


export function OutlinedButton(){

}