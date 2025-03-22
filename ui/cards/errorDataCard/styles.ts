import styled from "styled-components"

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