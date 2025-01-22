import styled from "styled-components"

export const FooterBody = styled.div`
  background-color:${({ theme }) => theme.backgroundSecondary};
  width: 100%;
  height: fit-content;
  padding-top:20px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  color:${({ theme }) => theme.color};

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }

  @media (min-width:769px){
    align-items: center;
  }
`

export const FooterContainer = styled.div`
  background-color:${({ theme }) => theme.backgroundSecondary};;
  border-top: solid 1px ${({ theme }) => theme.border};
  width: 100%;
  max-width: 1500px;
  height: 500px;
  margin:20px 0 0;
  padding:20px 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  @media (min-width:769px) {
    max-width: 810px;
    height: fit-content;
    margin:20px 0 0;
    padding:20px 20px;
    flex-direction: row;
    align-items: center;
  }
`

export const LogoContainer = styled.div`
  background-color:${({ theme }) => theme.backgroundSecondary};
`

export const SectionContainer = styled.section`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 10px;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items:left;
  gap:5px;
  
  a{
    display: flex;
    align-items: self-end;
    gap: 5px;
    cursor:pointer;
  }
`

export const CopyrightContainer = styled.div`    
  width: 100%;
  height: 45px;
  border-top:solid 1px ${({ theme }) => theme.border};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Span = styled.div`
  background-color:${({ theme }) => theme.border};
  width: 100px;
  height: 1px;
`