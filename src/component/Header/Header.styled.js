import styled from "styled-components";


export const HeaderSection = styled.header`

@media(max-width: 600px){
	background-color: white;
	border-bottom: 1px solid grey;
	position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
	height: 60px;
width:100%;
padding: 15px 0;

	a{
        border: none;
			text-decoration: none;
            padding: 6px 10px;
	 		transition-duration: .8s;
			color:black;
		}
}
	


@media(min-width: 600px){
	display: flex;
    justify-content: space-between;
	max-width: 1200px;
	margin-right: auto;
    margin-left: auto;
	color: var(----button-color-hover);
	padding: 15px 0; 
	
}
`

export const LogoConteiner = styled.div`

margin-left: 20px;
p{
	font-family: "Poppins", sans-serif;
    font-weight: 200;
	color: black;
	font-size: 28px;
	padding: 5px; 
	border: 1px solid #1a1a1a;
  border-radius: 8px;
  box-sizing: border-box;
}

span{
	color: var(--button-color);
	border-radius: 8px;

	
}

`
export const Logo = styled.div`
display: flex;
align-items: center;

 font-family: "Protest Revolution", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
	img{
	    width: 40px;
}

p{
	color:#4993c9;
}
`

export const Navigation = styled.div`
@media(max-width: 600px){
	margin: auto;	
}
	margin: auto 20px auto 0;
`


export const NavigationMobileButton = styled.button`
  display: none;

  @media(max-width: 600px){
	position: absolute;
	top: 8px;
    right: 0;
    display: block;
    margin-left: auto;
    padding-right: 10px;
    width: 50px;
    height: 50px;
    background-color: white;
    transition: all 1s ease-in-out; 
    

    svg {
      width: 100%;
      height: 100%;
    }
	}
`
export const BackDrop = styled.div`
&&.active{
	position: fixed;
    top: 0;
    left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #000000a1;
	padding: 0;
	z-index: 5;
}
`