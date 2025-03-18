import { BrandContainer, PurchaseByBrandSection } from "./styles"
import { MotorolaIcon, SamsungIcon, XiaomiIcon } from "ui/icons"
import {SubTitle, Title} from "ui/typography"
import Link from "next/link"

export function PurchaseByBrand() {
    return (
        <PurchaseByBrandSection>
            <SubTitle>Comprá por Marca</SubTitle>
            <BrandContainer>
                <Link href={"/search?q=motorola&offset=0&limit=10"} className="links" title="productos Motorola">
                    <MotorolaIcon />
                </Link>
                <Link href={"/search?q=samsung&offset=0&limit=10"} className="links" title="productos Samsung">
                    <SamsungIcon />
                </Link>
                <Link href={"/search?q=xiaomi&offset=0&limit=10"} className="links" title="productos Xiaomi">
                    <XiaomiIcon />
                </Link>
            </BrandContainer>
        </PurchaseByBrandSection>
    )

}