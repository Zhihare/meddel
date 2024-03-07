import styled from "styled-components";

export const LeftSideBarContainer = styled.div`

height: 100vh;
width: 400px;
border-radius: 20px;
margin-bottom: 20px;
border: solid 2px #777777;
border-radius: 15px;
`

export const LeftSideBarTitle = styled.h2`

width: fit-content;
margin: 20px auto;
font-size: 18px;
`


export const LeftSideBarList = styled.ul`

li{
    font-size: 24px;
    list-style: none;
    text-align: center;
    margin: 20px auto;
    padding: 20px 0;

    border: solid 2px #777777;
    border-radius: 15px;
    width: 250px;
   
}
li:hover{
    background-color: #d3d6de;
}

li.active{
    background-color: #d3d6de;
}

`