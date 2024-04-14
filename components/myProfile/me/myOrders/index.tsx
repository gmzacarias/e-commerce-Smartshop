import { useOrders } from "lib/hooks"
import router from "next/router"

export function MyOrders() {
    const data = useOrders()
    console.log("component my orders", data)

    function handleOrderById(orderId){
router.push(`/me/myOrders/${orderId}`)
    }

    return (
        <div>
            {data.length > 0?
                (
                    data.map(item =>
                    <div key={item.id}>
                        <h4>{item.status}</h4>
                        {/* <h4>{item.products}</h4> */}
                        <h4>{item.additionalInfo}</h4>
                        <h4>{item.totalPrice}</h4>
                        <h4>{item.url}</h4>
                        <button onClick={(orderId)=>handleOrderById(orderId)}></button>
                    </div>
                )
           
            ) : (
                    <div>
                        <h4>no hay resultados</h4>
                    </div>
                )}
        
        </div>
    )
}