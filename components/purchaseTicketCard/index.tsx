import styled from "styled-components";
import { useState } from "react";
import { HiColorSwatch } from "react-icons/hi";




const BodyCard = styled.div`
    width: 350px;
    min-width: 250px;
    height: 610px;
    background-color:#eaeaea;
    padding: 20px;
    border-radius: 10px;
   
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:5px;
    text-align: left;

`

const PaymentContainer = styled.div`
    width: 100%;
   
`

const BackgroundCheckIcon = styled.div<{ color?: string }>`
       width: 75px;
        height: 75px;
        border-radius: 50px;
       background-color:${(props) => props.color || "#FFF"} ;
   position:relative;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   `

const CheckIcon = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #23A26D;
   position:absolute
   
    `



const ContainerData = styled.div`
  width: 100%;
  display: flex;
   flex-direction: column;
   
    padding: 10px 0; /* Añadir espacio arriba y abajo del contenedor */
    font-size: 16px;
    background-color: blueviolet;
`

const Divs = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px; /* Añadir margen entre cada Div */
    background-color: #f9f9f9; /* Cambia el color de fondo para diferenciarlos */
    padding: 10px;
`

const Logo = styled.div`
    width: 156px;
    height: 60px;
    background-color:#000;
`

export function PurchaseTicketCard({status}) {
    const fecha = new Date()
    const currentDate = fecha.toLocaleString()
    const [color, SetColor] = useState("")

    function updateStatus(status) {
        SetColor(status)
    }
    const data = "soy data"

    const statusData = data ? "pending" : "failure";
    let statusColor
    if (statusData === "pending") {
        statusColor = "#db4109"

    } else if (statusData === "failure") {
        statusColor = "#ee0b0b"
    } else {
        statusColor ="#23A26D"
    }


    const orderId = "1xy0jCYUzvRPJ4Td0zjm"

    return (
        <>
            <BodyCard >
                <PaymentContainer>
                    <BackgroundCheckIcon color={color}>
                        <CheckIcon />
                    </BackgroundCheckIcon>
                    <h1 style={{ marginBottom: 10, textAlign: "center" }}>Pago exitoso!</h1>
                    <h2 style={{ textAlign: "center", fontSize: 24 }}>$10000</h2>
                </PaymentContainer>
                <span style={{ width: "100%", height: 1, backgroundColor: "blueviolet" }}></span>
                <ContainerData >
                    <Divs >
                        <p>Orden N°: </p>
                        <h4>{orderId ? orderId : "no hay datos"}</h4>
                    </Divs>

                    <Divs >
                        <p>Fecha:</p>
                        <h4>{currentDate ? currentDate : "no hay datos"}</h4>
                    </Divs>
                    <Divs >
                        <p>Metodo de pago</p>
                        <h4>tarjeta</h4>
                    </Divs>
                    <Divs >
                        <p>Nombre Comprador</p>
                        <h4>gaston mauro</h4>
                    </Divs>



                </ContainerData>
                <span style={{ width: "100%", height: 2, borderBottom: '2px dotted black', paddingBottom: 2 }}></span>
                <Logo></Logo>
                <div>get pdf</div>

            </BodyCard>
        </>
    )
}