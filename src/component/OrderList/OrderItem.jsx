import React from 'react'
import { OrderItemCart, OrderItemContainer, OrderItemList, OrderItemPhoto, OrderItemTotalPrice } from './OrderItem.styled'

const OrderItem = ({preparation, total}) => {


  return (
    <OrderItemContainer>
        <OrderItemList>
        {preparation.map(e => (
        <OrderItemCart key={e.preparation._id}>
                <OrderItemPhoto className='itemCartPhoto' src={e.preparation.photo} alt={e.preparation.name} />
                <div>
                    <h2>{e.preparation.name}</h2>
                    <p className='orderItemPrice'>price: {e.preparation.price} </p>
                    <p className='orderItemPrice'>quality: {e.quantity}</p>
                </div>
            </OrderItemCart>
        ))}
           
        </OrderItemList>
        <OrderItemTotalPrice>Total price: {total}</OrderItemTotalPrice>
    </OrderItemContainer>
  )
}

export default OrderItem