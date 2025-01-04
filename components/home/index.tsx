import { Title } from "@/ui/typography"
import { Search } from "@/components/search"
import { FeaturedProducts } from "@/components/featuredProducts"
import { PurchaseByBrand } from "@/components/purchaseByBrand"
import {HomeBody} from "./styles"

export function Home() {

    return (
        <HomeBody>
            <Title>Bienvenido a Smartshop</Title>
            <Search />
            <FeaturedProducts></FeaturedProducts>
            <PurchaseByBrand />
        </HomeBody>
    )
}