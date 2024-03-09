import { useProduct } from "lib/hooks"
import { DetailedProductCard } from "components/detailedProductCard"
import styled from "styled-components"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const BasicProductsBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
padding: 20px;

`


export function DetailedProduct({ productId }) {
    const productData = useProduct(productId) as any
    const isLoading = !productData

    console.log("datita", productData)
    return (
        <BasicProductsBody>
            {isLoading ? (
                <Skeleton></Skeleton>
            ) : (
                    <DetailedProductCard id={productData.id} photo={productData.photo} price={productData.price} brand={productData.brand} model={productData.model} android={productData.android} colour={productData.colour} camera={productData.camera} frontCamera={productData.frontCamera} storage={productData.storage} ram={productData.ram} />
            )}
        </BasicProductsBody>
    )
}