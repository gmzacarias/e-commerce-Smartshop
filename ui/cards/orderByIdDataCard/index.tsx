









type OrderByIdDataProps = {
    orderId: string,
    created: string,
    url: string,
    additionalInfo: string,
    status: string
}




export function OrderByIdDataCard({ orderId, created, url, additionalInfo, status }: OrderByIdDataProps) {
    return (
        <div>
            <h4>Order:{orderId}</h4>
            <h4>Fecha de compra:{created}</h4>
            <h4>Link de pago:{url}</h4>
            <h4>Informacion Adicional:{additionalInfo}</h4>
            <h4>Estado:{status}</h4>
            <h4></h4>


        </div>
    )
}