import styled, { keyframes } from "styled-components"
import { SectionTitle, ParagraphBold } from "ui/typography"
import { ItemCart } from "@/components/itemCart"

import { useCart, useReset, useDeleteItem } from "@/lib/atoms"
import router from "next/router"
import { OutlinedButton } from "ui/buttons"

const CartBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
padding: 20px;

`

const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
gap: 10px;
`

const ItemsContainer = styled.div`
background-color:var(--light);
border-radius: 10px;
padding:10px;
width:500px;

min-height: 400px;
height: fit-content;
display: flex;
flex-direction: column;
color:var(--blue-dark);
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
gap: 5px;
position: relative
;

&:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 2px;
}
`

const Products = styled.div`

width: 480px;
height: fit-content;
gap: 10px;
border-bottom: solid 1px black;


ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

li{
    list-style: none;
    padding-bottom: 10px;
}

li:nth-child(1){
padding-left: 25px;
}

li:nth-child(2){
padding-left: 45px;
}

li:nth-child(3){
padding-right: 10px;
}
`


const ResumeCartContainer = styled.div`
   background-color:var(--light);
border-radius: 10px;
padding:10px;
width:200px;
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
const ButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    gap: 10px;
    bottom: 10px;
    right: 10px;
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
                <CartContainer>
                    <ItemsContainer>
                        <Products>
                            <ul>
                                <li>Producto</li>
                                <li>Cantidad</li>
                                <li>Precio</li>

                            </ul>
                        </Products>
                        {cartData && cartData.map(item =>
                            <ItemCart key={item.id} id={item.id} model={item.model} photo={item.photo} brand={item.brand} colour={item.colour} price={item.price} quantity={item.quantity} onDelete={() => handleDelete(item.id)} />
                        )}
                        <ButtonsContainer>
                            <OutlinedButton type="reset" onClick={handleReset} >Reset</OutlinedButton>
                            <OutlinedButton type="button" onClick={handleReset} >Volver</OutlinedButton>
                        </ButtonsContainer>

                    </ItemsContainer>

                    <ResumeCartContainer>
                        <ParagraphBold>Productos:{handleTotalQuantity()}</ParagraphBold>
                        <ParagraphBold>Precio Final:${handleTotalPrice()}</ParagraphBold>
                        <button onClick={handleCheckout}>Pagar</button>
                    </ResumeCartContainer>


                </CartContainer>
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