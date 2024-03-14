import React from 'react'
import { OrderListContainer } from './OrderList.styled'
import OrderItem from './OrderItem'
import { DelList } from '../Deliveri/Delivery.styled'
import { useSelector } from 'react-redux'
import { ordersSelector } from '../../redax/order/orderSelector'

const OrderList = () => {
  const orders = useSelector(ordersSelector);


  return (
    <OrderListContainer>
        <DelList>
        {orders.map(e => (
           <OrderItem key={e.id} preparation={e.preparation} total={e.total}/>
					
					))}
      
        </DelList>
        </OrderListContainer>
  )
}

export default OrderList