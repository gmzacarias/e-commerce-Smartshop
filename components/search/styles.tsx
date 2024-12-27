import styled from "styled-components"

export const SearchBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`
export const FormContainer = styled.form`
flex-direction: column;
`


export const InputSearch = styled.input`

width: 250px;
min-width: 200px;
padding: 10px;
margin  :10px ;
border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  color: dimgray;


/* &:invalid {
  animation: justshake 0.3s forwards;
  color: red;
}

@keyframes justshake {
  25% {
    transform: translateX(5px);
  }

  50% {
    transform: translateX(-5px);
  }

  75% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX-(5px);
  }
} */

@media screen and (min-width:769px){

&{
    width:350px

}
}  


`