import React from 'react'
import { HeaderSection, Navigation } from './Header.styled'
import Navigator from '../Navigation/Navigation'


const Header = () => {
	return (
		<HeaderSection>
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
		</HeaderSection>
	)
}

export default Header