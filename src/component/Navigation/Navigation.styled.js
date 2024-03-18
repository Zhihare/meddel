import styled from 'styled-components'

export const NavigationNav = styled.nav`

@media(max-width: 600px){
	display: none;
	

	&&.active{
	position: absolute;
	right: 0;
    top: 60px;
	
    display: flex;
	align-items: center;
	transition: all 1s ease-in;
	justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
  
    background: white;
    border-bottom: solid 2px #7777;
   
    width: 100%;
	padding-top: 20px;
	height: 360px;
    font-size: 30px;
   

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
			margin: 6px 20px;
			padding-bottom: 5px;
			transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
			border-bottom: 2px solid transparent;
            
	}

    a:hover{
        color: blue;
		/* font-size: 20px; */
    }
	.active{
		color: blue;
		border-color: blue;
		transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
`
