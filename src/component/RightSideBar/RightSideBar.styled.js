import styled from "styled-components";


export const RightSideBarContainer = styled.div`

width: 100%;

border-radius: 20px;
margin-bottom: 20px;

border-radius: 5px;
`



export const RightSideBarList = styled.ul`

@media(max-width: 600px){
    justify-content: center;
    margin: 10px 10px;
}

display: flex;
flex-wrap: wrap;
gap: 20px;
margin: 30px 10px;


li{
    position: relative;
    border: solid 1px #777777;
    border-radius: 5px;
    width: calc((100% / 3) - 15px); 
    min-width: 230px; 
    max-width: calc((1017px / 3) - 15px); 
   
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   
    @media(max-width: 1100px){
        width: calc((100% / 2) - 15px);
        max-width: calc((100%/2) - 15px); 
    }

    @media (max-width: 690px) {
    width: calc((100%) - 15px);  /* Минимальная ширина элемента */
    max-width: calc((100%) - 15px); 
}

    img{
       
        display: block;
        padding: 15px;
        border-bottom: solid 1px #777777;
        height: 280px;
        width: 100%;
        object-fit: contain;
    }

   
}
`
export const NameSection = styled.div`
        display: flex;
        flex-wrap: wrap;
        padding: 20px 0;
        align-items: center;
        justify-content: space-around;
        background-color: #f2f2f2;
        border-radius: 5px;

      button{
       
        border: solid 1px #777777;
        border-radius: 5px;
        padding: 5px 20px;

        &:hover{
            background-color: #d3d6de;
        }

    }


`


export const Backdrop = styled.div`
position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 80%; 
  background-color: rgba(0, 0, 0, 0.5); 
  opacity: 0; 
  transition: opacity 1s ease; 
  display: flex; 
  align-items: center; 
  justify-content: center; 

  &:hover,
  &:focus {
    opacity: 1; 
  }

  p{
    color: white;
    font-size: 20px;
  }
`


export const NothingTitle = styled.h2`
    text-align: center;
    margin-top: 50px;
`