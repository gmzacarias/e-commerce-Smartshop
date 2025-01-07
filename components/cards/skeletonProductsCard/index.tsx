import Skeleton from "react-loading-skeleton"
import {SkeletonContainer,SkeletonImage,SkeletonBrand,SkeletonModel,SkeletonPrice,SkeletonButton} from "./styles"

type LengthProps = {
    length: number
}

export function SkelentonProductsCard({ length }: LengthProps) {

    return (
        Array.from({ length: length }).map((_, index) => (
            <SkeletonContainer key={index}>
                <SkeletonImage baseColor="#eaeaea"  />
                <SkeletonBrand  baseColor="#eaeaea" />
                <SkeletonModel  baseColor="#eaeaea" />
                <SkeletonPrice  baseColor="#eaeaea" />
                <SkeletonButton  baseColor="#eaeaea" />
            </SkeletonContainer>
        ))
    )


}