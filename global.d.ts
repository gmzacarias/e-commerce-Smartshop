declare global {
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

}

export { }