import styled from 'styled-components'

export const OrderItemContainer = styled.li`
display: flex;
align-items: center;
position: relative;


    font-size: 24px;
    text-align: center;
    margin: 20px 0;
    padding: 20px;

    height: 320px;
    overflow: hidden;

    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media(max-width: 800px){
        display: block;
    height: fit-content;
        max-height: 320px;
  
}
    
    div{
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    }

    h2{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    p.orderItemPrice{
        font-size: 18px;
        margin-bottom: 10px;
    }
`

export const OrderItemList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    row-gap: 70px;
    column-gap: 20px;

    height: 320px;
    overflow: scroll;
    padding-top: 70px;
    padding-bottom: 70px;

    @media(max-width: 800px){
        row-gap: 0;
        padding-top: 0;
        margin-bottom: 20px;
        height: fit-content;
        max-height: 320px;
    }


`

export const OrderItemCart = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    overflow-y: auto;
    width: 360px;
    padding: 10px;
 @media(max-width: 600px){
    font-size: 16px;
 }
    @media(max-width: 800px){
    display: inline-block;
    width: 100%;
    img{
        display: none;
    }

    div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    }

    h2{
       margin: 0;
    }

    ul{
        gap: 10px;
        padding: 10px;
    }

    p.orderItemPrice{
        margin-bottom: 0;
    }
  
}

`

export const OrderItemPhoto = styled.img`
    min-width: 100px;
    width: 250px;
    height: 160px;
    object-fit: contain;
    margin-right: auto ;

`

export const OrderItemTotalPrice = styled.p`
min-width: 35%;
font-size: 36px;
color: #777777;
margin-left: auto;

@media(max-width: 800px){
    font-size: 26px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 100%;
    padding-top: 5px;
    border-top: solid 2px;
}

`