import React from 'react'
import { ShopPageConteiner } from './ShopPage.styled'
import ShopingCartForm from '../component/ShopingCardForm/ShopingCartForm'
import Deliveri from '../component/Deliveri/Deliveri'
import { ToastContainer } from 'react-toastify'

const ShopingCartPage = () => {
  return (
    <ShopPageConteiner>
       <ShopingCartForm/>
       <Deliveri/>
       <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light">
    </ToastContainer>
    </ShopPageConteiner>
  )
}

export default ShopingCartPage