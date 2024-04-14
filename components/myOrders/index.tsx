import {useOrders} from "lib/hooks"
export function MyOrders(){
    const data=useOrders()
    console.log("component my orders",data)



    return <div>
        <h5>hola estas son mis ordenes de compra</h5>
    </div>
}