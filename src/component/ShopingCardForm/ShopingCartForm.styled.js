import styled from "styled-components";


export const FormContainer = styled.form`

@media(max-width: 600px){
    height: fit-content;
    width: 100%;
}
font-size: 20px;
width: 700px;
margin-bottom: 10px;
border: solid 2px #777777;
border-radius: 15px;
padding: 30px 70px;

div {
    width: 500px;
}

div input{
    width: 500px;
    height: 40px;
    padding: 10px;
    margin-bottom: 25px;
    border: solid 2px #777777;
border-radius: 15px;
}

label {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

button{
    position: absolute;
    right: 0;
    bottom: -100px;

    width: 250px;
    height: 60px;

    padding: 10px;

    border: solid 2px #777777;
    border-radius: 15px;

    font-size: 24px;
    font-weight: 600;
   
}

button:hover{
    background-color: #d3d6de;
}
`

export const ErrorMessege = styled.p`
color: red;
font-size: 14px;
`
export const TotalPrice = styled.p`
    position: absolute;
    bottom: -80px;
    right: 450px;
    color: #777777;
    font-size: 24px;
    font-weight: 600;
`
