import styled from "styled-components"
import { useSearch } from "lib/hooks"
import { SearchProductCard } from "../searchProductCard"
import router from "next/router"
import { SearchInputIndex } from "ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useEffect, useState } from "react"
import { Paragraph, SectionTitle, Small } from "ui/typography"
import { Pagination } from "components/pagination"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchProductBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
padding: 20px;
gap:5px;
`
const PaginationContainer = styled.div`
    padding: 10px;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:20px;
    flex-wrap: wrap;
    padding-top:20px;
    width:60vw;

    @media screen and (max-width:1000px) {
        &{
          flex-direction:column;
        }   
    }
`

export function SearchProduct({ query, offset, limit }) {
    const [search, setSearch] = useState('');
    const data = useSearch(query, offset, limit)
    console.log("busqueda", data)
    const totalResults = data?.pagination.totalResults as any
    const totalPages = totalResults ? Math.ceil(totalResults / 10) : 0
    console.log(totalResults, totalPages)
    const results = data?.results as any


    useEffect(() => {
        if (query) {
            setSearch(query)
        }
    }, [query])


    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault()
        const querySearch = search
        router.push(`/search?q=${querySearch}&offset=${offset}&limit=${limit}`)
    }


    function handlePageChange(newOffset) {
        router.push(`/search?q=${search}&offset=${newOffset}&limit=${limit}`)
    }


    if (totalResults !== 0) {
        return (
            <SearchProductBody>
                <SectionTitle>Encontra los mejores celulares del mercado</SectionTitle>
                < SearchInputIndex type="search" placeholder="Que estas buscando?" name="query" value={search} onChange={handleChange} />
                <DefaultButton onClick={handleSearch}>
                    <Paragraph>BUSCAR</Paragraph>
                </DefaultButton>
                <PaginationContainer>
                    <Pagination totalPages={totalPages} limit={limit} onPageChange={(newOffset) => handlePageChange(newOffset)} />
                </PaginationContainer>

                <ProductsContainer>

                    {results ? (
                        results.map(item =>
                            <SearchProductCard key={item.id} id={item.id} brand={item.brand} model={item.model} photo={item.photo} price={item.price}></SearchProductCard>
                        )
                    ) : (
                        Array.from({ length: 5 }).map((_,index) => (
                          <Skeleton key={index}></Skeleton>
                      ))
                    )
                }
                </ProductsContainer>
            </SearchProductBody >
        )
    }
    return (
        <SearchProductBody>
            <SectionTitle>Encontra los mejores celulares del mercado</SectionTitle>
            < SearchInputIndex type="search" placeholder="Que estas buscando?" name="query" value={search} onChange={handleChange} />
            <DefaultButton onClick={handleSearch}>
                <Paragraph>BUSCAR</Paragraph>
            </DefaultButton>
            <div>
                <h1>no hay resultados</h1>
            </div>
        </SearchProductBody>
    )

}