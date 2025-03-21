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

}

export { }