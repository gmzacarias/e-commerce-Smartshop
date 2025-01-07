import styled from "styled-components"

export const FeaturedProductsSection = styled.div`
background-color:${({theme})=> theme.mode === "dark" ? "#121212" : "#eaeaea"};
width: 100%;
height:fit-content ;
padding: 20px;
display: flex;
flex-direction: column;
gap:20px;
`
