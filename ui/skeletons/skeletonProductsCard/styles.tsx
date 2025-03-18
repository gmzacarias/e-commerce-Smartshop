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

export const SkeletonImage = styled(Skeleton)`
  width: 200px;
  height: 200px;
`

export const SkeletonText = styled(Skeleton)`
  width: 130px;
  height: 18px;
`

export const SkeletonButton=styled(Skeleton)`
  width: 190px;
  height: 44px;
`