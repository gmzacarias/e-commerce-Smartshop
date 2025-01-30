import styled from "styled-components"


export const SessionButton = styled.button`
  background: none;
  border:none;
  width: 100%;
  height: 100%;
  display: flex;
  padding:5px 10PX;
  align-items: center;
  gap:5px;
  font-family:var(--font-family);
  color:${({ theme }) => theme.color};
  cursor: pointer;
`

export const ToggleButton = styled(SessionButton)`
  justify-content:flex-start;
  
  @media (min-width:769px){
     padding:unset;
   }
`

export const CardBtn = styled.button`
  background-color: #007bff;
  border:solid 1px  #007bff;
  border-radius: 4px;
  width: 100%;
  min-width: 130px;
  max-width: 220px;
  height: 44px;
  padding: 8px 32px;
  font-family: var(--font-family);
  font-size: 16px;
  color:#eaeaea;
  text-decoration: none;
  cursor:pointer;
`

export const FormBtn=styled.button`
  width: 260px;
  height: 40px;
  padding: 10px 18px;
  text-align: center;
  background-color: #0091ea;
  border-radius: 4px;
  border: none;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  letter-spacing: 1px;
  color:#eaeaea;
  cursor:pointer;
  
  @media(min-width:769px){
       width:312px;
   }
  
`

export const DefaultBtn=styled.button`
  width: 250px;
  height: 40px;
  padding: 10px 18px;
  text-align: center;
  background-color: #0091ea;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  letter-spacing: 1px;
  color:#eaeaea;
  cursor:pointer;
  
  @media(min-width:769px){
       width:350px;
   }
`