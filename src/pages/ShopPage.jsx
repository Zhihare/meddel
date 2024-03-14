import React, { useEffect } from 'react'
import LeftSideBar from '../component/LeftSideBar/LeftSideBar'
import RightSideBar from '../component/RightSideBar/RightSideBar'
import { ShopPageConteiner } from './ShopPage.styled'
import { useDispatch, useSelector } from 'react-redux'
import { catalogSelector} from '../redax/catalogSelector'
import { setIsLoading } from '../redax/catalogSlice'
import { getCatalogPharms } from '../redax/catalogThank'



const ShopPage = () => {
    const dispatch = useDispatch();
	const catalogPharm = useSelector(catalogSelector);
    

useEffect(() => {
    if (!catalogPharm.length) {
      dispatch(setIsLoading(true));
      dispatch(getCatalogPharms());
    }
  }, [dispatch, catalogPharm]);
 


  return (
    <ShopPageConteiner>
    <LeftSideBar/>
    <RightSideBar/>
    </ShopPageConteiner>
   
  )
}

export default ShopPage