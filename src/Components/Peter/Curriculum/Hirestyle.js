import styled from "styled-components"


export const Dnav = styled.div`
width: 300px;
height: 300px;
background:${({ clr }) => clr};
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
border-radius: 10px;
box-shadow: 3px 3px 3px 3px #888888;
margin-bottom: 10px;

`

export const Iconnv = styled.div`
width: 100px;
height: 100px;
padding-top: 30px;
display: flex;
justify-content: center;
`


export const IconTitle = styled.div`
width: 300px;
  height: 50px;
  color: white;
  font-size: 30px;
  display: flex;
  font-weight: bold;
  justify-content: center;
`


export const IconContent = styled.div`
width: 200px;
height: 50px;
color: white;
text-align: center;
`
