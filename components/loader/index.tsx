import { Loader, LoaderBody, LoaderContainer } from "./styles";
import { LabelLoader } from "../../ui/typography";

export function LoaderApp() {
    return (
        <LoaderBody>
            <LoaderContainer>
                <LabelLoader>Cargando...</LabelLoader>
                <Loader />
            </LoaderContainer>
        </LoaderBody>
    )
}