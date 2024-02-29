import { useProduct } from "lib/hooks"
import { ItemCard } from "@/components/item-card"

export function ItemById({ productId }) {
    const productData = useProduct(productId)
    
    return (
        <div>
            <ItemCard data={productData}></ItemCard>
        </div>
    )
}