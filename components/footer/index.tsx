import { FooterBody, CopyrightContainer, FooterContainer, SocialLinksContainer, LinksContainer, PagesContainer } from "./styles"
import { BrandFooterIcon, GithubIcon, LinkedinIcon, GmailIcon } from "@/ui/icons"
import Link from "next/link"


export function Footer() {
  const getDate = new Date().getFullYear()

  return (
    <FooterBody>
      <Link href={"/"}>
        <BrandFooterIcon />
      </Link>
      <FooterContainer>
        <PagesContainer className="">
          <h3>Mi perfil</h3>
          <span className="span"></span>
          <Link href={"/me"}>
            <p>Mi cuenta</p>
          </Link>
          <Link href={"/me/myorders"}>
            <p>Mis ordenes</p>
          </Link>
          <Link href={"/cart"}>
            <p>Mi carrito</p>
          </Link>
        </PagesContainer>
        <PagesContainer>
          <h3>Productos</h3>
          <span className="span"></span>
          <Link href={"/search?q=motorola"}>
            <p>Motorola</p>
          </Link>
          <Link href={"/search?q=samsung"}>
            <p>Samsung</p>
          </Link>
          <Link href={"/search?q=xiaomi"}>
            <p>Xioami</p>
          </Link>
        </PagesContainer>

        <SocialLinksContainer>
          <h3>Contacto</h3>
          <span className="span"></span>
          <LinksContainer  >
            <Link href={"https://github.com/gmzacarias"} >
              <GithubIcon />
              <p>Github</p>
            </Link>
          </LinksContainer>

          <LinksContainer className="links">
            <Link href={"https://www.linkedin.com/in/gastonmzacarias/"} >
              <LinkedinIcon />
              <p>Linkedin</p>
            </Link>
          </LinksContainer>


          <LinksContainer className="links">
            <Link href={"mailto:gastonmzacarias@gmail.com"} >
              <GmailIcon />
              <p>Mail</p>
            </Link>
          </LinksContainer>

        </SocialLinksContainer>
      </FooterContainer>
      <CopyrightContainer >
        <p>Desarrollado por gmz©{getDate}</p>
      </CopyrightContainer>
    </FooterBody >
  )
}