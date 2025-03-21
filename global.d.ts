declare global {

    interface GetTokenResponse {
        email: string,
        code: number,
        message: string,
        token: string
    }

}

export {}