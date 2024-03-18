import React from 'react'
import { Backdrop, NameSection, NothingTitle, RightSideBarContainer, RightSideBarList } from './RightSideBar.styled'
import { allPreparationsSelector, selectAddPreparation } from '../../redax/catalogSelector';
import { useDispatch, useSelector } from 'react-redux';
import { addPreparation, removePreparation } from '../../redax/catalogSlice';



const RightSideBar = () => {
const dispatch = useDispatch();
  const preparation = useSelector(allPreparationsSelector);
  const delCart = useSelector(selectAddPreparation);

  const addToCart = (id) => {
    const foundItem = delCart.find(item => item.preparationID === id);
  
    if (!foundItem) {
      dispatch(addPreparation({ preparationID: id, quantity: 1 }));
    } else {
      dispatch(removePreparation({ preparationID: id, quantity: foundItem.quantity + 1 }));
    }
  }
  console.log(preparation);

  return (
    <RightSideBarContainer>
       {preparation.length !==0? 
    <RightSideBarList>
    {preparation.map(e => (
						<li key={e._id}>
        <img src={e.photo} alt={e.name}></img>
        <Backdrop>
          <p>{e.name}</p>
        </Backdrop>
        <NameSection>
          <p>{e.name}</p>
          <button onClick={()=>addToCart(e._id)}>add to Card</button>
        </NameSection>
              </li>
					))}
    </RightSideBarList>:
    <NothingTitle>Please, choose a pharmacy.</NothingTitle>}
   </RightSideBarContainer>
  )
}

export default RightSideBar