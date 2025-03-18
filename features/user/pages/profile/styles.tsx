import styled from "styled-components"


export const ProfileBody = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
 
  @media(min-width:769px){
      flex-direction: row;
      justify-content: center;
    }
`
export const PageContainer = styled.section`
  background: url("./brand.svg");
  background-repeat: repeat;
  background-size: 90px;
  background-position: 10px;
  background-blend-mode: overlay;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height:100%;
  padding: 70px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media(min-width:769px){
    padding: 70px;
    gap: 10px;
  }
  
`

export const ErrorContainer = styled.div`
  background-color: ${({ theme }) => theme.mode === "dark" ? "#ff4444" : "#f8d7da"};
  border: 1px solid ${({ theme }) => theme.mode === "dark" ? "#ff0000" : "#f5c6cb"};
  border-radius: 5px;
  margin: 20px 0;
  padding: 15px;
  width: 100%;
  max-width:fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

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
