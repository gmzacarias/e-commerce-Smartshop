import { useOrders } from "@/hooks/swr/useSWR"
import router from "next/router"
import { MyOrdersBody, TableOrders } from "./styles"

export function MyOrders() {
    const { getData } = useOrders()
    const data = getData

    // console.log("component my orders", ordersData)


    function handleOrderById(orderId: string) {
        // console.log("orderid", orderId)
        router.push(`/me/myorders/${orderId}`)
    }

    function goToProduct(productId) {
        // console.log("id", productId)
        const id = productId
        router.push(`/product/${id}`)
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


    function OrderList({ data }) {
        const { id, status, totalPrice, products, created } = data;


        return (
            <>
                <thead>
                    <tr key={id}>
                        <th style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                            <h4>{created}</h4>
                            <button onClick={() => handleOrderById(id)}>Ver Compra</button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <td >
                        <ProductList products={products} />
                    </td>
                    <td >{status}</td>
                    <td >${totalPrice}</td>

                    <td >
                    </td>
                </tbody>
            </>

        )
    }


    return (
        <MyOrdersBody>

            {data?.length > 0 ?
                (

                    <TableOrders>
                        <thead>
                            <tr>
                                <th >Compras</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <OrderList key={item.id} data={item}></OrderList>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>soy el footer</th>
                            </tr>
                        </tfoot>
                    </TableOrders>

                ) : (
                    <div>
                        <h4>no hay resultados</h4>
                    </div>
                )}



        </MyOrdersBody>
    )
}