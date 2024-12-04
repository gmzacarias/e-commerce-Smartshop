import { useOrderById } from "lib/hooks"
import router from "next/router"

export function OrderById({ orderId }) {
    const ordersData = useOrderById(orderId)
    console.log("data a mostrar", ordersData)
    const { id, status, totalPrice, products, created, url } = ordersData.data;

    console.log("data 2", { id, status, totalPrice, products, created, url })


    function goToProduct(productId) {
        // console.log("id", productId)
        const id = productId
        router.push(`/product/${id}`)
    }


    function handleRedirect(url: string) {
        // console.log("orderid", orderId)
        router.push(url)
    }


    function OrderList() {



        return (
            <>
            <table>

                <thead>
                    <tr >
                        <th  >
                            informacion de la compra
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <h4>{created}</h4>
                    <button onClick={() => handleRedirect(url)}>Pagar Compra</button>
                    <td >{status}</td>
                    <td >${totalPrice}</td>

                    <td >
                    </td>
                </tbody>
            </table>
            </>

        )
    }




    function ProductList({ products }) {



        return (
            <>
                {products.map((product) => (
                    <div key={product.productId} style={{ backgroundColor: "blue", border: "solid 1px orange", width: "100%", margin: 5, display: "flex", flexDirection: "row", }}>
                        <img src={product.photo} style={{ width: 100, height: 100 }} alt="" />

                        <h4>{product.brand}</h4>
                        <h4>{product.model}</h4>
                        <p>{product.colour}</p>
                        <button onClick={() => goToProduct(product.productId)}>Volver a comprar</button>
                    </div>
                ))}
            </>
        )
    }




    return (
        <>
            <table style={{ backgroundColor: "blueviolet" }}>

                <thead>
                    <tr>
                        <th>estado de la compra</th>
                    </tr>


                </thead>

                <tbody>
                    <ProductList products={products} />
                    <OrderList></OrderList>
                </tbody>
            </table>
        </>

    )

}