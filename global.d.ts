import { ReactNode } from "react"

declare global {
    type PagesContainerProps = {
        $isAuth: boolean
        subTitleText: string,
        children: ReactNode
    }

    /*Auth*/
    interface GetTokenResponse {
        email: string,
        code: number,
        message: string,
        token: string
    }

    interface EmailFormValue {
        email: string
    }

    interface CodeFormValue {
        otp: string[]
    }

    /*User*/
    interface DataFormValue {
        email: string,
        userName: string,
        address: string,
        phoneNumber: number,
    }

    interface DataFormParams {
        email: string,
        userName: string,
        address: string,
        phoneNumber: number
    }

    interface ProductData {
        productId: string,
        photo: string,
        model: string,
        brand: string,
        colour: string
    }

    type OrderDataCardProps = {
        product: ProductData[],
        status: string,
        buttons:ReactNode
    }

    interface OrdersData {
        id: string,
        status: string,
        products: ProductData[],
        created: string,
    }

    type OrdersCardProps = {
        data: OrdersData[],
        children: (products: ProductData, status: string) => ReactNode,

    }

    interface UseOrderData {
        data: OrdersData[],
        isLoading: boolean,
        isError: boolean,
        error: Error | null
    }

}

export { }