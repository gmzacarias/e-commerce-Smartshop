import { Loader, LoaderContainer } from "./styles";
import { LabelLoader } from "../typography";

export function LoaderApp (){
    return (
        <LoaderContainer>
            <LabelLoader>Cargando...</LabelLoader>
            <Loader/>
        </LoaderContainer>
    )
}