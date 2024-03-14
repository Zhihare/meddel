import styled from 'styled-components'

export const OrderItemContainer = styled.li`
display: flex;
align-items: center;


    font-size: 24px;
    text-align: center;
    margin: 20px 0;
    padding: 20px;

    border: solid 2px #777777;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media(max-width: 800px){
    flex-wrap: wrap;
    grid-gap: 30px;
  
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
    gap: 20px;

`

export const OrderItemCart = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;

`

export const OrderItemPhoto = styled.img`
    min-width: 100px;
    width: 250px;
    height: 160px;
    border: solid 2px #777777;
    border-radius: 15px;
    object-fit: contain;

`

export const OrderItemTotalPrice = styled.p`
width: 600px;
font-size: 36px;
color: #777777;
`