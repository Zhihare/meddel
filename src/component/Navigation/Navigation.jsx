import React, { useEffect, useState } from 'react'
import { NavigationNav } from './Navigation.styled'
import { NavLink } from 'react-router-dom'

const Navigation = ({ status, onClick }) => {
	const [isOpen, setIsOpen] = useState(true);
	
	useEffect(() => {
    setIsOpen(status);
	}, [status]);
	

	return (
		<NavigationNav className={isOpen ? 'active' : ''}>
			<NavLink onClick={onClick}  activeclassname="active" to="/">
				Shop
			</NavLink>
			<NavLink onClick={onClick} activeclassname="active" to="/shopingcart">
				Shoping cart
			</NavLink>
			<NavLink  onClick={onClick} activeclassname="active" to="/history">
				History
			</NavLink>
            <NavLink onClick={onClick} activeclassname="active" to="/coupons">
				Coupons
			</NavLink>
		</NavigationNav>
  )
}

export default Navigation