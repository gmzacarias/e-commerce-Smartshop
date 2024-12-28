import styled from "styled-components"


export const FooterBody = styled.div`
    background-color:#292728;
    width: 100%;
    height: max-content;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top:20px ;
    color: #fff;
font-size: 16px;

    a{
        text-decoration: none;
        color: #fff;
    }



`

export const FooterContainer = styled.div`
 background-color:#292728;
 width: 100%;
  max-width: 1500px;
  height: 500px;
  padding:20px 25px 0px;
  margin:20px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px var(--grey);

@media (min-width:769px) {
   
       flex-direction: row;
height: fit-content;
    max-width: 810px;
    padding:20px 20px;
    margin:20px 0 0;
}


`;

export const LogoContainer = styled.div`
    background-color: azure;
    
`

export const CopyrightContainer = styled.div`
    
    width: 100%;
    height: 45px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-top:solid 1px var(--grey);
`


export const SocialLinksContainer = styled.div`
  width:auto;
  height:fit-content;
  /* background-color: rgb(238, 238, 238); */
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  gap: 20px;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055); */
  /* border: solid 1px var(--grey); */
  border-radius: 15px;
  gap:10px;



  /* .links:nth-child(3):hover {
    background-color: #eaeaea;
  
  }

  .links:nth-child(3):hover svg {
    fill: #181717;
  }

  .links:nth-child(4):hover {
    background-color: #EAEAEA;
} 

   .links:nth-child(4):hover svg {
    fill: #0072b1;
  } */

  .span{
    background-color:var(--grey);
    width: 100px;
    height: 1px;
  }

  @media(min-width:769px){
    flex-direction: column;
  }
`

export const LinksContainer = styled.div`

  display: flex;
  gap:5px;

  align-items:left;

cursor:pointer;


a{
        text-decoration: none;
        color: #fff;
        display: flex;
        gap: 5px;
        text-align: left;
    }
   




`


export const PagesContainer = styled.div`
    width: auto;
    height: fit-content;
    border-radius: 15px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: left;
   gap: 10px;

   .span{
    background-color:var(--grey);
    width: 100px;
    height: 1px;
  }
`