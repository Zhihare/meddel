import styled from "styled-components";


export const FormContainer = styled.form`

@media(max-width: 800px){
    height: fit-content;
    width: 100%;
    padding: 20px;

  .formHistory{
    padding: 20px;
  }
}

@media(max-width: 900px){
    padding: 10px 20px;

     .formHistory{
    
    padding: 10px 20px;
  }
}

font-size: 20px;
    min-width: 250px;
    width: calc((100% / 2) - 100px);
    margin-bottom: 10px;
    padding: 30px 30px;

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



div input{
      width: 100%;
    height: 40px;
    padding: 10px;
    margin-bottom: 25px;
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
