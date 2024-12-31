import { BrandContainer, PurchaseByBrandBody } from "./styles"
import { MotorolaIcon, SamsungIcon, XiaomiIcon } from "ui/icons"
import Link from "next/link"

export function PurchaseByBrand() {
    return (
        <PurchaseByBrandBody>
            <h2 style={{ fontSize: 36 }}>Compra por Marca</h2>
            <BrandContainer>
                <Link href={"/search?q=motorola&offset=0&limit=10"} className="links">
                    <MotorolaIcon />
                </Link>
                <Link href={"/search?q=samsung&offset=0&limit=10"} className="links">
                    <SamsungIcon />
                </Link>
                <Link href={"/search?q=xiaomi&offset=0&limit=10"} className="links">
                    <XiaomiIcon />
                </Link>
            </BrandContainer>
        </PurchaseByBrandBody>
    )

}