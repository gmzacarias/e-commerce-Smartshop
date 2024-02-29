import { ImageCardProduct } from "ui/images"

import { useProduct } from "lib/hooks"


export function ItemCard(data) {
 const dataCard=data.data
    return (
        <div>
            <p>Version Android:{dataCard.Android}</p>
            <p>Marca:{dataCard.Brand}</p>
            <p>Camara:{dataCard.Camera}</p>
            <p>Camara frontal:{dataCard.FrontCamera}</p>
            <p>Color:{dataCard.Colour}</p>
            <p>Almacenamiento:{dataCard.Storage}</p>
            <p>Modelo:{dataCard.Model}</p>
            <p>Imagen:{dataCard.Photo}</p>
            <p>Memoria:{dataCard.Ram}</p>
        </div>
    )
}