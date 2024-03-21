import styled from "styled-components";


export const FormContainer = styled.form`

@media(max-width: 800px){
    height: fit-content;
    width: 100%;

  .formHistory{
    padding: 20px;
  }
}

@media(max-width: 900px){
  
     .formHistory{
    
    padding: 10px 20px;
  }
}

 h3{
   font-size: 20px;
   width: 100%;
   margin-bottom: 20px;
 }

.formHistory{
  width: 100%;
    padding: 30px 25%;
  }

 .formHistory{
  width: 100%;
    padding: 30px 25%;
  }

div{
  margin-bottom: 10px;
}

div input{
      width: 100%;
    height: 40px;
    padding: 10px;
    border: none;
    background-color: rgb(242 242 242);
    border-radius: 5px;
}

label {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
   
}

`
export const Button = styled.button`
 position: absolute;
    right: 20px;
    bottom: 0;
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
    bottom: 15px;
    color: #777777;
    font-size: 24px;
    font-weight: 600;

    @media(max-width: 600px){
        position: static;
    }
`

export const LocationList = styled.ul`
    border: solid 1px black;
    border-top: none;
    padding: 5px;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    li{
    margin-bottom: 5px;
    background-color: rgba(0, 0, 0, 0.03);
    cursor: pointer;
    font-size: 16px;
    }

    li:hover{
        background-color: #d3d6de;
    }
`
