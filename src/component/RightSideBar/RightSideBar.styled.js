import styled from "styled-components";


export const RightSideBarContainer = styled.div`

height: 100vh;
width: 100%;

border-radius: 20px;
margin-bottom: 20px;
border: solid 2px #777777;
border-radius: 15px;
`

export const RightSideBarList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 50px;
margin: 30px 70px;

li{
    padding: 15px; 
    border: solid 2px #777777;
    border-radius: 15px;
    width: 300px;


    img{
        border: solid 2px #777777;
        border-radius: 15px;
        height: 150px;
        width: 100%;
        object-fit: cover;
    }
}
`