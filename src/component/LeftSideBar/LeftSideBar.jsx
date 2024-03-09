import React, { useState } from 'react'
import { LeftSideBarContainer, LeftSideBarList, LeftSideBarTitle } from './LeftSideBar.styled'
import { useDispatch, useSelector } from 'react-redux';
import { catalogSelector } from '../../redax/catalogSelector';
import { getPreparation } from '../../redax/catalogThank';

const LeftSideBar = () => {

    const dispatch = useDispatch();
    const catalogPharm = useSelector(catalogSelector);
    const [activeIndex, setActiveIndex] = useState(null);

    const toglePharm = (id) => {
            dispatch(getPreparation(id));
            setActiveIndex(id);
		}
    

  return (
   <LeftSideBarContainer>
    <LeftSideBarTitle>Shops:</LeftSideBarTitle>
    <LeftSideBarList>
    
        {catalogPharm.map(e => (
						<li key={e._id} onClick={()=>toglePharm(e._id)} 
                        className={e._id === activeIndex ? 'active' : 'default'}>{e.name}</li>
					))}
        
    </LeftSideBarList>
   </LeftSideBarContainer>
  )
};

export default LeftSideBar