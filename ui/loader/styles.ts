import styled, { keyframes } from "styled-components"

const loading = keyframes`
  0% {
    left: 25%;
  }
  100% {
    left: 50%;
  }
  0% {
    left: 0%;
  }
`
export const LoaderBody = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoaderContainer = styled.div`
  background-color:${({ theme }) => theme.mode === "dark" ? "#121212" : "#f2f4f5"};
  border-radius: 20px;
  box-shadow: 0 2px 6px 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;

  @media(min-width:769px){
    width:350px;
    height: 180px;
    padding:30px;
  }
`

export const Loader = styled.div`
  width: 100%;
  height: 10px;
  background:${({ theme }) => theme.mode === "dark" ? "var(--dark-background-navfoot)" : "var(--background-navfoot)"};
  border-radius: 10px;
  position: relative;

  &:after{
    content:"";
    background:  #0091ea;
    border-radius: 10px;
    width: 50%;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    animation: ${loading} 0.6s alternate infinite; 
  }
`

