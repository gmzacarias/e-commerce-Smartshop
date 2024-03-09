import { useCart } from "lib/hooks"
import styled from "styled-components"
import { SectionTitle } from "ui/typography"
import { ItemCartCard } from "components/itemCartCard"
import { CartCount } from "components/cartCount"
import { useCartValue } from "@/lib/atoms"

const CartBody = styled.main`
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
height: fit-content;
display: flex;
flex-direction: column;
color:var(--blue-dark);
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
gap: 5px;

&:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 2px;
}
`


export function Cart() {
    const dataCart = useCart() as any
    const cart=useCartValue()
    // console.log("carrito", dataCart)
console.log("carrito",cart)

    return (
        <CartBody>
            <SectionTitle>Productos</SectionTitle>
            <ItemsContainer>
                {/* {dataCart && dataCart.map(item=>
    <ItemCartCard key={item.id} id={item.id} model={item.model} photo={item.photo} brand={item.brand} colour={item.colour} price={item.price}/>
    )} */}
                <p>hola soy la p</p>

            </ItemsContainer>


        </CartBody>
    )
}