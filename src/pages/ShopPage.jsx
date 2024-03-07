import React from 'react'
import LeftSideBar from '../component/LeftSideBar/LeftSideBar'
import RightSideBar from '../component/RightSideBar/RightSideBar'
import { ShopPageConteiner } from './ShopPage.styled'

const ShopPage = () => {
  return (
    <ShopPageConteiner>
    <LeftSideBar/>
    <RightSideBar/>
    </ShopPageConteiner>
  )
}

export default ShopPage