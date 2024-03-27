import styled, { keyframes } from "styled-components"
import { SectionTitle } from "ui/typography"
import { ItemCart } from "@/components/itemCart"

import { useCart, useReset, useDeleteItem } from "@/lib/atoms"
import router from "next/router"

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
const ResumeCartContainer = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    background-color: cornflowerblue;
`


export function Cart() {
    const [cartData, setCartData] = useCart()
    const resetCart = useReset()
    const deleteItem = useDeleteItem()
    console.log(cartData)

    function handleDelete(productId) {
        deleteItem(productId)
        const updatedCart = cartData.filter(item => item.id !== productId)
        setCartData(updatedCart)
    }
    
    function handleReset() {
        resetCart()
    }
    
    function handleRedirect() {
        router.push("/")
    }



    if (cartData.length >= 1) {
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
                    {cartData && cartData.map(item =>
                        <ItemCart key={item.id} id={item.id} model={item.model} photo={item.photo} brand={item.brand} colour={item.colour} price={item.price} onDelete={() => handleDelete(item.id)} />
                    )}
                </ItemsContainer>
                <button type="reset" onClick={handleReset} >reset</button>
                <ResumeCartContainer>

                </ResumeCartContainer>

            </CartBody>
        )

    } else {
        return (
            <CartBody>
                <h2>no hay productos agregados</h2>
                <button onClick={handleRedirect}>buscar productos</button>
            </CartBody>

        )
    }

}