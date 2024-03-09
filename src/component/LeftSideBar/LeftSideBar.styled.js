import styled from "styled-components";

export const LeftSideBarContainer = styled.div`

@media(max-width: 600px){
    height: fit-content;
    width: 100%;
}
height: 100vh;
width: 400px;
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

@media(max-width: 600px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    overflow: hidden;
    overflow-y: auto;
}


li{
    @media(max-width: 600px){
        margin: 10px 10px;
        padding: 5px;
        width: fit-content;
    }

    font-size: 24px;
    list-style: none;
    text-align: center;
    margin: 20px auto;
    padding: 20px 0;

    border: solid 2px #777777;
    border-radius: 15px;
    width: 200px;
   
}
li:hover{
    background-color: #d3d6de;
}

li.active{
    background-color: #d3d6de;
}

`