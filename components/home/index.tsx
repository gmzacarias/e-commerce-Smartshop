import styled from "styled-components"
import router from "next/router"
import { FeaturedProducts } from "@/components/featuredProducts"
import { Title, SectionTitle, Paragraph } from "@/ui/typography"
import { SearchInputIndex } from "ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useAppData } from "@/lib/atoms"
import { useEffect, useState } from "react"

const HomeBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export function Home() {
 
    const [search, setSearch] = useState('');

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault()
        const querySearch = search
        const offset = 0
        const limit = 10
        // console.log(querySearch)
        router.push(`/search?q=${querySearch}&offset=${offset}&limit=${limit}`)
    }

    return (
        <HomeBody>
            <Title>Bievenido a Smartshop</Title>
            <SectionTitle>Encontra los mejores celulares del mercado</SectionTitle>
            < SearchInputIndex type="search" placeholder="Que estas buscando?" name="query" value={search} onChange={handleChange} />
            <DefaultButton onClick={handleSearch}>
                <Paragraph>BUSCAR</Paragraph>
            </DefaultButton>
            <FeaturedProducts></FeaturedProducts>
        </HomeBody>

    )
}