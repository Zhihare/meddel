import styled from "styled-components";

export const DelContainer = styled.div`

@media(max-width: 600px){
    height: fit-content;
    width: 100%;
    padding: 20px;

  
}
font-size: 20px;
min-width: 340px;
width: 700px;
height: 500px;
margin-bottom: 10px;
border: solid 2px #777777;
border-radius: 15px;

overflow: hidden;
overflow-y: auto;
`

export const DelList = styled.ul`
margin: 20px;
`

export const DelItem = styled.li`
display: flex;
gap: 20px;
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
    padding: 20px;

    border: solid 2px #777777;
    border-radius: 15px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    img{
        min-width: 100px;
    width: 400px;
    height: 160px;
    border: solid 2px #777777;
    border-radius: 15px;
    object-fit: cover;
    }
    
    div{
        display: flex;
        width: 250px;
    text-align: center;
    flex-direction: column;
    align-items: center;
    }

    h2{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    p{
        font-size: 18px;
        margin-bottom: 30px;
    }

    input{
        width: 100%;
        text-align: center;
        height: 40px;
    padding: 10px;
    border: solid 2px #777777;
    border-radius: 10px;
    }
`