import { ThemeConsumer } from "@/utils/darkMode/themeContext"
import styled from "styled-components"

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:30px;

  @media (min-width:769px){
        flex-direction:row;
        justify-content: flex-start;
        margin-left: auto;
        margin-right: auto;    
    } 
`

export const ProductCard = styled.div`
background-color:${({theme})=> theme.mode === "dark" ? "#121212" : "#f2f4f5"};
border-radius: 20px;
/* box-shadow: 0 2px 6px 1px ${({theme})=> theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"}; */
border: 1px solid ${({theme})=> theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"} ;
width: 100%;
max-width: 220px;
height:fit-content;
padding: 15px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap:10px;    
text-align: left;

`

export const PhotoCard = styled.img`
width:200px;
height:200px;
aspect-ratio:1/1;
`

export const ButtonCard = styled.button`
    width: 100%;
    min-width: 130px;
    max-width: 220px;
    height: 44px;
    padding: 8px 32px;
    background-color: #4697e8;
    font-size: 14px;
    color: #eaeaea;
    border-radius: 4px;
    border: none;
    cursor:pointer;
    text-decoration: none;

    `