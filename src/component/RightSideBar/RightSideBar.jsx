import React from 'react'
import { RightSideBarContainer, RightSideBarList } from './RightSideBar.styled'
import { LeftSideBarList } from '../LeftSideBar/LeftSideBar.styled'

const RightSideBar = () => {
  return (
    <RightSideBarContainer>
    <RightSideBarList>
        <li>
        <img src='https://root.tblcdn.com/img/goods/38cdd884-0747-4b43-9c7d-a0c20c5da253/1/img_0.jpg?v=AAAAAAoeI0Q'></img>
        <h1>Paracetomol</h1>
        <button>Add to card</button>
        </li>
        <li>
        <img src='https://root.tblcdn.com/img/goods/38cdd884-0747-4b43-9c7d-a0c20c5da253/1/img_0.jpg?v=AAAAAAoeI0Q'></img>
        <h1>Paracetomol</h1>
        <button>Add to card</button>
        </li>
        <li>
        <img src='https://root.tblcdn.com/img/goods/38cdd884-0747-4b43-9c7d-a0c20c5da253/1/img_0.jpg?v=AAAAAAoeI0Q'></img>
        <h1>Paracetomol</h1>
        <button>Add to card</button>
        </li>
    </RightSideBarList>
   </RightSideBarContainer>
  )
}

export default RightSideBar