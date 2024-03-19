import styled from "styled-components";

export const DelContainer = styled.div`

@media(max-width: 800px){
    height: fit-content;
    width: 100%;

  
}
font-size: 20px;
width: calc((100% / 2) + 70px);
height: 500px;
margin-bottom: 10px;

overflow: hidden;
overflow-y: auto;

&#style-3::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
  background-color: white;
}

&#style-3::-webkit-scrollbar
{
  width: 6px;
  background-color: white;
}

&#style-3::-webkit-scrollbar-thumb
{
  background-color: #777777;
}
`

export const DelList = styled.ul`
margin: 20px;
`

export const DelItem = styled.li`
display: flex;
align-items: center;

gap: 20px;
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
    padding: 20px;

    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    img{
    min-width: 100px;
    width: calc(100%/2);
    height: 160px;
    object-fit: contain;
    }
    
    div{
        display: flex;
        width: 250px;
    text-align: center;
    flex-direction: column;
    align-items: center;
    }

    h2{
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    p{
        font-size: 18px;
        margin-bottom: 30px;
    }

    input{
        width: calc(80%);
        text-align: center;
        height: 40px;
    padding: 10px;
    border: solid 2px #777777;
    border-radius: 10px;
    }
`