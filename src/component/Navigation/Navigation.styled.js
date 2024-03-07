import styled from 'styled-components'

export const NavigationNav = styled.nav`
	display: flex;
    justify-content: space-around;
	align-items: center;

		a{
			color: black;
			padding: 6px 30px;
            border-right: 2px solid black;
            
			/* border-bottom: 2px solid transparent; */
	}
    a:last-child{
        border-right: none;
    }

    a:hover{
        color: blue;
    }
	.active{
		color: blue;
	}
`