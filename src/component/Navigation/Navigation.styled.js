import styled from 'styled-components'

export const NavigationNav = styled.nav`

@media(max-width: 600px){
	display: none;
	

	&&.active{
    display: block;
	background: white;
    display: flex;
    gap: 15px;
    flex-direction: column;
    position: absolute;
    border-bottom: solid 2px #7777;
    right: 0;
    top: 60px;
    width: 100%;
    font-size: 30px;
    align-items: center;

	a{
			color: black;
			padding: 6px 30px;
			border: none;
            
	}
	 a:hover{
        color: blue;
    }
	.active{
		color: blue;
	}
	
}

	}


	display: flex;
    justify-content: space-around;
	align-items: center;

		a{
			color: black;
			padding: 6px 30px;
            border-right: 2px solid black;
            
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
