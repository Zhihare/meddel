import styled from "styled-components";

export const LoaderStyled = styled.div`
position: absolute;
position: fixed;
background-color: #000000a8;
  
  top: 0;
  left: 0;

 width: 100vw;
 height: 100vh;
  z-index: 9999;

  div{
     display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

`;

export const LoaderContent = styled.div`

`