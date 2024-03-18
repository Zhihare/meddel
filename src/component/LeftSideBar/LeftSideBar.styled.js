import styled from "styled-components";

export const LeftSideBarContainer = styled.div`

@media(max-width: 600px){
    height: fit-content;
    width: 100%;
}
height: 100vh;
width: 400px;
margin-bottom: 20px;
background-color: rgb(242 242 242);
border-radius: 5px;
`

export const LeftSideBarTitle = styled.h2`

    padding: 20px 10px;
    font-size: 16px;
    padding-bottom: 10px;
    background-color: white;
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
    margin: 0 auto;
    padding: 10px 0;
    border-bottom: solid 2px #ffffff;
    width: 100%;
   
}
li:hover{
    background-color: #d3d6de;
}

li.active{
    background-color: #d3d6de;
}

`