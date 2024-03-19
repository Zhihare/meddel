import styled from "styled-components"

export const ShopPageConteiner = styled.div`
position: relative;
display: flex;
margin-top: 50px;
gap: 20px;

@media(max-width: 600px){
    padding-bottom: 100px;
}
@media(max-width: 800px){
    flex-direction: column;
}
`