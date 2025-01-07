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
  background-color: #4697e8;
  border-radius: 4px;
  width: 100%;
  min-width: 130px;
  max-width: 220px;
  height: 44px;
  padding: 8px 32px;
  font-size: 14px;
  color:#eaeaea;
  text-decoration: none;
  cursor:pointer;
`