import styled, { keyframes } from "styled-components"
import { SectionTitle } from "ui/typography"
import { ItemCartCard } from "components/itemCartCard"

import { useCart,  } from "@/lib/atoms"

const CartBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
padding: 20px;

`

const ItemsContainer = styled.div`
background-color:var(--light);
border-radius: 10px;
padding:10px;
width:500px;
height: 400px;
display: flex;
flex-direction: column;
color:var(--blue-dark);
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
gap: 5px;

&:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 2px;
}
`

const Products = styled.div`
background-color:darkblue;
width: 500px;
height: 50px;


ul{
    display: flex;
    flex-direction: row;
}

li{
    list-style: none;
}

li:nth-child(0){
color: aquamarine;
}
`


export function Cart() {
    const [cartData, setCartData] = useCart()

    function handleDelete(productId) {
        const updateCart = cartData.filter(item => item.id !== productId)
        setCartData(updateCart)
    }


    return (

        <CartBody>
            <SectionTitle>Productos</SectionTitle>
            <Products>
                <ul>
                    <li>producto</li>
                    <li>precio</li>
                    <li>cantidad</li>
                    <li>total</li>




                </ul>
            </Products>
            <ItemsContainer>
                {cartData.map(item =>
                    <ItemCartCard key={item.id} model={item.model} photo={item.photo} brand={item.brand} colour={item.colour} price={item.price} onDelete={() => handleDelete(item.id)} />
                )}
            </ItemsContainer>

        </CartBody>

    )
}