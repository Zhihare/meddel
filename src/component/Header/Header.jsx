import React, { useState } from 'react'
import { BackDrop, HeaderSection, Logo, Navigation, NavigationMobileButton } from './Header.styled'
import Navigator from '../Navigation/Navigation';
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";




const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const chengeClassName = () => {
		if (isOpen) {
            return setIsOpen(false);
        } else {
            return setIsOpen(true);
        }
	}


	  const handleBackdropClick = () => {
    setIsOpen(false);
	};
	
	return (
		<>
			<HeaderSection>
				<Logo>
					<img src="https://cdn.icon-icons.com/icons2/1465/PNG/512/740pill_100923.png" alt="logo" />
					<p>MedDel</p>
					</Logo>
		<Navigation>
					{window.innerWidth < 600 ? (
						<Navigator onClick={chengeClassName} status={isOpen} />
					) : (
						<Navigator status={isOpen} />)}
				{!isOpen ?
					<NavigationMobileButton onClick={chengeClassName}>
						<FiAlignJustify />
					</NavigationMobileButton> :
					<NavigationMobileButton onClick={chengeClassName} className='active'>
						<IoCloseSharp />
					</NavigationMobileButton>}
		</Navigation>
			</HeaderSection>
			<BackDrop onClick={handleBackdropClick} className={isOpen ? 'active' : ''}/>
			</>
	)
}

export default Header