export function OrderByIdDataCard({ data }: OrderByIdDataProps) {
    return (
        <div>
            <h4>Order:{data.id}</h4>
            <h4>Fecha de compra:{data.created}</h4>
            <h4>Link de pago:{data.url}</h4>
            <h4>Informacion Adicional:{data.additionalInfo}</h4>
            <h4>Estado:{data.status}</h4>
            <h4></h4>


        </div>
    )
}