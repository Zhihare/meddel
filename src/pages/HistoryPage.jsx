import React from 'react'
import { HistoriPageContainer } from './HistoryPage.styled'
import HistoryPageForm from '../component/HistoryPageForm/HistoryPageForm'
import OrderList from '../component/OrderList/OrderList'

const HistoryPage = () => {
  return (
    <HistoriPageContainer>
      <HistoryPageForm/>
      <OrderList/>
    </HistoriPageContainer>
  )
}

export default HistoryPage