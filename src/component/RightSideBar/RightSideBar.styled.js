import styled from "styled-components";


export const RightSideBarContainer = styled.div`

height: 100vh;
width: 100%;

overflow: hidden;
overflow-y: auto;

border-radius: 20px;
margin-bottom: 20px;
border: solid 2px #777777;
border-radius: 15px;
`

export const RightSideBarList = styled.ul`
@media(max-width: 600px){
    justify-content: center;
    margin: 10px 30px;
}

display: flex;
flex-wrap: wrap;
gap: 40px;
margin: 30px 70px;


li{
    padding: 15px; 
    border: solid 2px #777777;
    border-radius: 15px;
    width: 270px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   

    img{
        border: solid 2px #777777;
        border-radius: 15px;
        height: 150px;
        width: 100%;
        object-fit: contain;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        align-items: center;
        justify-content: space-around;
    }

    button{
       
        border: solid 2px #777777;
        border-radius: 15px;
        padding: 5px 20px;

        &:hover{
            background-color: #d3d6de;
        }

    }

}
`
export const NothingTitle = styled.h2`
    text-align: center;
    margin-top: 50px;
`