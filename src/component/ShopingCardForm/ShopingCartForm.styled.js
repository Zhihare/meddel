import styled from "styled-components";


export const FormContainer = styled.form`

@media(max-width: 600px){
    height: fit-content;
    width: 100%;
    padding: 20px;
}

@media(max-width: 700px){
    padding: 10px 20px;
}

font-size: 20px;

width: 700px;
margin-bottom: 10px;
border: solid 2px #777777;
border-radius: 15px;
padding: 30px 70px;



div input{
    width: 100%;
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

`
export const Button = styled.button`
 position: absolute;
    right: 20px;
    bottom: -100px;
    width: 250px;
    height: 60px;
    padding: 10px;
    border: solid 2px #777777;
    border-radius: 15px;
    font-size: 24px;
    font-weight: 600;

  &:hover {
    background-color: #d3d6de;
  }

  @media (max-width: 600px) {
    right: 0px;
    bottom: 50px;
  }
`;

export const ErrorMessege = styled.p`
color: red;
font-size: 14px;
`
export const TotalPrice = styled.p`
    position: absolute;
    bottom: -85px;
    right: 450px;
    color: #777777;
    font-size: 24px;
    font-weight: 600;

    @media(max-width: 600px){
        position: static;
    }
`
