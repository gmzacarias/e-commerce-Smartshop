import styled from "styled-components"

export const NavBody = styled.div`
  background-color: var(--light);
  border-bottom:solid 1px var(--grey);
  width: 100%;
  height: fit-content;
  margin-bottom: 10px;
  padding:10px 20px;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width:fit-content;
  height:fit-content;
`;

export const MenuContainer = styled.ul<{ open: any }>`
  background-color: var(--light);
  border-bottom:solid 1px var(--grey);
  width: 100%;
  height: fit-content;
  padding:10px 0 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  top: 73px;
  left:  ${({ open }) => (open ? "0" : "-100%")};
  transition: 0.5s all ease-in-out;
  z-index:1;

  @media(min-width: 1000px) {
    border-bottom: unset;
    width: fit-content;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: unset;
    list-style: none;
    top:unset;
    left:unset;
    right: 10px;
    transition: unset;
    z-index: unset;
  }
`;

export const ItemListMenu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkItemList = styled.div`
  display: flex;
  margin-left:15px;

    svg {
     display: flex;
    } 
    
    .links{
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100%;
     padding: 5px 10px;
     color: var(--grey);
     text-decoration: none;
     cursor: pointer;
    }

    .links:hover {
      color: var(--grey-dark);
    }

  @media(min-width: 1000px) {
    margin-left: unset;
  }
`;

export const HamburguerMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    fill:var(--grey);
    margin-right: 10px;
  }

    svg:hover{
      fill:var(--grey-dark);
    }

  @media(min-width: 1000px) {
    display:none;
    
      svg{
       display: none;
      }
    }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
    
  @media(min-width:1000px){
    &{
      margin-left: unset;
    }
  }
`;