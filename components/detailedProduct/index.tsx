import { useProduct } from "lib/hooks"
import {DetailedProductCard} from "components/detailedProductCard"

export function DetailedProduct({ productId }) {
    const productData = useProduct(productId)
    
    return (
        <div>
            <DetailedProductCard data={productData}/>
        </div>
    )
}