import styled from "styled-components"
import { useSearch } from "lib/hooks"
import { BasicProductCard } from "../basicProductCard"
import router from "next/router"
import { SearchInputIndex } from "ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useEffect, useState } from "react"
import {Paragraph,SectionTitle} from "ui/typography"

const BasicProductsBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
padding: 20px;

`
const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:20px;
    flex-wrap: wrap;
    padding-top:20px;
    width: 70%;

    @media screen and (max-width:1000px) {
        &{
            
          flex-direction:column;
        }   
    }
`

export function BasicProduct({ query, offset, limit }) {
    const [search, setSearch] = useState('');
    const data = useSearch(query, offset, limit)
    console.log("busqueda", data)
    const pagination = data?.pagination

    const results = data?.results as any

    useEffect(() => {
        if (query) {
            setSearch(query)
        }
    }, [])


    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault()
        const querySearch = search
        // console.log(querySearch)
        router.push(`/search?q=${querySearch}&offset=${pagination.offset}&limit=${pagination.limit}`)
    }


    // console.log("productos", data.results, "pagination", data.pagination)

    return (
        <BasicProductsBody>
              <SectionTitle>Encontra los mejores celulares del mercado</SectionTitle>
            < SearchInputIndex type="search" placeholder="Que estas buscando?" name="query" value={search} onChange={handleChange} />
            <DefaultButton onClick={handleSearch}>
                <Paragraph>BUSCAR</Paragraph>
            </DefaultButton>
            {/* <h4>pagination
                <p>  results:{pagination.totalResults}</p>
                <p>   offset:{pagination.offset}</p>
                <p> limit:{pagination.limit}</p>
            </h4> */}


            <ProductsContainer>
                {results && results.map(item =>
                    <BasicProductCard key={item.id} id={item.id} brand={item.brand} model={item.model} photo={item.photo} price={item.price}></BasicProductCard>
                )
                }
            </ProductsContainer>

        </BasicProductsBody>
    )

}