import React, { useEffect, useState } from 'react'
import { DelContainer, DelItem, DelList } from './Delivery.styled'
import { TotalPrice } from '../ShopingCardForm/ShopingCartForm.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectAddPreparation } from '../../redax/catalogSelector'
import { getCatalogPharms, getOnePreparation } from '../../redax/catalogThank'
import { removePreparation, setIsLoading } from '../../redax/catalogSlice'

const Deliveri = () => {
const dispatch = useDispatch();
const [preparationInCart, setpreparationInCart] = useState([]);

const delCart = useSelector(selectAddPreparation);

useEffect(() => {
    const findById = async () => {
      const promises = delCart.map(async (item) => {
        const preparation = { ...(await dispatch(getOnePreparation(item.id))), quantity: item.quantity };
        return preparation;
      });
  
      const preparations = await Promise.all(promises);
      setpreparationInCart(preparations);
    };
  
    findById();
  }, [dispatch, delCart]);
  
  
  const totalPrice = preparationInCart.reduce((total, e) => {
    return total + e.quantity * e.payload.price;
  }, 0);


  return (
    <DelContainer>
        <DelList>
        {preparationInCart.map((e, index) => (
            <DelItem key={e.payload._id}>
                <img src= {e.payload.photo} alt={e.payload.name} />
                <div>
                    <h2>{e.payload.name}</h2>
                    <p>price: {e.payload.price}</p>
                    <input type='number' name='quantity' value={e.quantity}
                    min={0} 
                      onChange={(event) => {
                        setpreparationInCart((prevPreparations) => {
                          const updatedPreparations = [...prevPreparations];
                          updatedPreparations[index].quantity = event.target.value;
                          return updatedPreparations;
                        });
                        dispatch(removePreparation({ id: e.payload._id, quantity: event.target.value }));
                      }}/>
                </div>	
            </DelItem>
            ))}
        </DelList>
        <TotalPrice>Total price: {totalPrice}</TotalPrice>
    </DelContainer>
  )
}

export default Deliveri