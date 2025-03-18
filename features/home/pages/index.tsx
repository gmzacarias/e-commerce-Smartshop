import { Title } from "@/ui/typography"
import { Search } from "@/features/products/components/search"
import { FeaturedProducts } from "@/features/home/components/featuredProducts"
import { PurchaseByBrand } from "@/features/home/components/purchaseByBrand"
import { HomeBody } from "./styles"

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