
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"

export const SkeletonContainer = styled.div`
  background-color:${({ theme }) => theme.mode === "dark" ? "#121212" : "#f2f4f5"};
  border-radius: 20px;
  box-shadow: 0 2px 6px 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
  width: 100%;
  max-width: 220px;
  height:fit-content;
  padding: 15px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap:10px;    
`
export const SkeletonLabel = styled(Skeleton)`
  width: 400px;
  height: 18px;
`

export const SkeletonText = styled(Skeleton)`
  width: 400px;
  height: 18px;
`

export const SkeletonButton = styled(Skeleton)`
  width: 250px;
  height: 44px;

  @media(min-width:769px) {
    width: 350px;
  }
`
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
`
