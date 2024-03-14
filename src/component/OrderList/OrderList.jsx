import React, { useState } from 'react'
import { OrderListContainer } from './OrderList.styled'
import OrderItem from './OrderItem'
import { DelList } from '../Deliveri/Delivery.styled'
import { useDispatch, useSelector } from 'react-redux'

const OrderList = () => {
  const dispatch = useDispatch();

  // const orders = useSelector();
  

  // useEffect(() => {
  //   const findById = async () => {
  //     const promises = delCart.map(async (item) => {
  //       const preparation = { ...(await dispatch(getOnePreparation(item.preparationID))), quantity: item.quantity };
  //       return preparation;
  //     });
  
  //     const preparations = await Promise.all(promises);
  //     setpreparationInCart(preparations);
    
  //   };
  
  //   findById();
  // }, [dispatch, delCart]);

  return (
    <OrderListContainer>
        <DelList>
       <OrderItem/>
        </DelList>
        </OrderListContainer>
  )
}

export default OrderList