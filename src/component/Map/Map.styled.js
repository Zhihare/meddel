import styled from "styled-components";

export const ButtonMap = styled.button`
position: absolute;
padding: 5px;
top: 10px;
right: 100px;
z-index: 50;
background-color: white;

&:last-child{
    right: 10px;
}
&:hover{
    background-color: #777777;
}
`
