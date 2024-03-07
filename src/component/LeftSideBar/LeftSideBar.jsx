import React from 'react'
import { LeftSideBarContainer, LeftSideBarList, LeftSideBarTitle } from './LeftSideBar.styled'

const LeftSideBar = () => {
  return (
   <LeftSideBarContainer>
    <LeftSideBarTitle>Shops:</LeftSideBarTitle>
    <LeftSideBarList>
        <li>Drugs</li>
        <li>Medicin 24/7</li>
    </LeftSideBarList>
   </LeftSideBarContainer>
  )
}

export default LeftSideBar