import styled from "styled-components"

export const ProfileDataContainer = styled.div`
  background-color:${({ theme }) => theme.mode === "dark" ? "#121212" : "#f2f4f5"};
  border-radius: 20px;
  box-shadow: 0 2px 6px 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
  width: 100%;
  max-width: 500px;
  height:fit-content;
  padding: 30px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap:10px;    
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
`