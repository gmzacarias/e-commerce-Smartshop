import styled,{keyframes} from "styled-components"

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

export const LoaderContainer=styled.div`
  width: 350px;
  height: 180px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  box-shadow: 2px 2px 10px -5px lightgrey;
`

export const Loader=styled.div`
  width: 100%;
  height: 10px;
  background: lightgrey;
  border-radius: 10px;
  position: relative;

  &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 10px;
      background: #002;
      border-radius: 10px;
      z-index: 1;
      animation: ${loading} 0.6s alternate infinite; 
   }
`

