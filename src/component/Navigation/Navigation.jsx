import React, { useEffect, useState } from 'react'
import { NavigationNav } from './Navigation.styled'
import { NavLink } from 'react-router-dom'

const Navigation = ({ status }) => {
	const [isOpen, setIsOpen] = useState(true);
	
	useEffect(() => {
    setIsOpen(status);
	}, [status]);
	

	return (
		<NavigationNav className={isOpen ? 'active' : ''}>
			<NavLink activeclassname="active" to="/">
				Shop
			</NavLink>
			<NavLink activeclassname="active" to="/shopingcart">
				Shopincard
			</NavLink>
			<NavLink activeclassname="active" to="/history">
				History
			</NavLink>
            <NavLink activeclassname="active" to="/coupons">
				Coupons
			</NavLink>
		</NavigationNav>
  )
}

export default Navigation