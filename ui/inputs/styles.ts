import styled from "styled-components"

const Input = styled.input`
  background-color:${({ theme }) => theme.backgroundSecondary} ;
  border-color: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  width: 100%;
  min-width: 220px;
  height: 50px;
  margin:unset;
  padding:unset;
  font-size:16px;
  color:${({ theme }) => theme.color};
  text-align: left;
  caret-color: ${({ theme }) => theme.color};
  position:relative;

  &:focus {
    border-color: #0091ea;
  }

  &:valid,
  &:focus{
    border-color: #0091ea;
  }

  &::-webkit-search-cancel-button {
      display: none;
    }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

   &{
      appearance: none;
    }

`

export const SearchInputHome = styled(Input)`
  margin-top:5px;; 
`


export const Search = styled(Input)`
  padding: 10px 50px 10px 5px;
`

export const Login = styled(Input)`
  
  padding:0 16px;

  @media(min-width:769px){
      width:312px;
    }
`

export const OTPForm = styled(Input)`
  width: 44px;
  min-width: unset;
  height: 40px; 
  padding: unset;
  text-align:center;

  @media(min-width:769px){
      width:54px;
      height:50px;
    }
`
export const EditProfile = styled(Input)`
  width:fit-content;
  padding-left: 5px;
  padding-right:16px;
  
  @media(min-width:769px){
      width:440px;
    }
`