import React from 'react'
import { DelItem } from '../Deliveri/Delivery.styled'
import { OrderItemCart, OrderItemContainer, OrderItemList, OrderItemPhoto, OrderItemTotalPrice } from './OrderItem.styled'

const OrderItem = () => {
  return (
    <OrderItemContainer>
        <OrderItemList>
        <OrderItemCart>
                <OrderItemPhoto className='itemCartPhoto' src="https://root.tblcdn.com/img/goods/380c375b-7547-4025-bb30-70feba3c613e/1/img_0.jpg?v=AAAAAAnuTuk" alt="Paracetomol" />
                <div>
                    <h2>Paracetomol</h2>
                    <p className='orderItemPrice'>price: 100 </p>
                    <p className='orderItemPrice'>quality: 4</p>
                </div>
            </OrderItemCart>
            <OrderItemCart>
                <OrderItemPhoto className='itemCartPhoto' src="https://root.tblcdn.com/img/goods/380c375b-7547-4025-bb30-70feba3c613e/1/img_0.jpg?v=AAAAAAnuTuk" alt="Paracetomol" />
                <div>
                    <h2>Paracetomol</h2>
                    <p className='orderItemPrice'>price: 100 </p>
                    <p className='orderItemPrice'>quality: 4</p>
                </div>
            </OrderItemCart>
            <OrderItemCart>
                <OrderItemPhoto className='itemCartPhoto' src="https://root.tblcdn.com/img/goods/380c375b-7547-4025-bb30-70feba3c613e/1/img_0.jpg?v=AAAAAAnuTuk" alt="Paracetomol" />
                <div>
                    <h2>Paracetomol</h2>
                    <p className='orderItemPrice'>price: 100 </p>
                    <p className='orderItemPrice'>quality: 4</p>
                </div>
            </OrderItemCart>
           
        </OrderItemList>
        <OrderItemTotalPrice>Total price: 900</OrderItemTotalPrice>
    </OrderItemContainer>
  )
}

export default OrderItem