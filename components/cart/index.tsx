import styled, { keyframes } from "styled-components"
import { SectionTitle, ParagraphBold } from "ui/typography"
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

width: 480px;
height: 50px;
gap: 10px;



ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

li{
    list-style: none;
}

li:nth-child(1){
color: #000101;
width: 100px;
border:solid 1px black;
padding-left: 20px;
}

li:nth-child(2){
color: #45c03c;

}
`
const ResumeCartContainer = styled.div`
    display: flex;
    width: 150px;
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

    function handleSearch() {
        router.push("/search?q=&offset=0&limit=10")
    }

    function handleTotalQuantity() {
        const totalQuantity = cartData.reduce((total, item) => {
            return total + item.quantity
        }, 0)
        // console.log("cantidad total", totalQuantity)
        return totalQuantity
    }

    function handleTotalPrice() {
        const totalPrice = cartData.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
        // console.log("precio total", totalPrice)
        return totalPrice
    }

    function handleCheckout() {
        console.log("data cart", cartData)
        for (const products of cartData) {
            const { id, quantity } = products
            console.log("resultado del for", id, quantity)
        }
    }


    if (cartData.length >= 1) {
        return (
            <CartBody>
                <SectionTitle>Productos</SectionTitle>
                <ItemsContainer>
                    <Products>
                        <ul>
                            <li>Producto</li>
                            <li>Cantidad</li>
                            <li>Precio final</li>
                        
                        </ul>
                    </Products>
                    {cartData && cartData.map(item =>
                        <ItemCart key={item.id} id={item.id} model={item.model} photo={item.photo} brand={item.brand} colour={item.colour} price={item.price} quantity={item.quantity} onDelete={() => handleDelete(item.id)} />
                    )}
                </ItemsContainer>
                <button type="reset" onClick={handleReset} >reset</button>
                <ResumeCartContainer>
                    <ParagraphBold>Cantidad:{handleTotalQuantity()}</ParagraphBold>
                    <ParagraphBold>Precio Final:{handleTotalPrice()}</ParagraphBold>

                    <button onClick={handleCheckout}>Pagar</button>
                </ResumeCartContainer>

            </CartBody>
        )

    } else {
        return (
            <CartBody>
                <h2>no hay productos agregados</h2>
                <button onClick={handleSearch}>buscar productos</button>
            </CartBody>

        )
    }

}