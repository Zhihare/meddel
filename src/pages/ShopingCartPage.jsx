import React from 'react'
import { ShopPageConteiner } from './ShopPage.styled'
import ShopingCartForm from '../component/ShopingCardForm/ShopingCartForm'
import Deliveri from '../component/Deliveri/Deliveri'

const ShopingCartPage = () => {
  return (
    <ShopPageConteiner>
       <ShopingCartForm/>
       <Deliveri/>
    </ShopPageConteiner>
  )
}

export default ShopingCartPage