import router from "next/router"
import { sendCode, getToken, saveToken } from "lib/api"
import { sendCodeToast, loginToast } from "lib/sonner"
import { useAppData } from "lib/atoms"


export function Login() {
    const [data, setData] = useAppData()
    async function handleEmailForm(e) {
        e.preventDefault()
        const email = e.target.email.value
        setData({
            ...data,
            email: email
        })
        await sendCode(email)
        sendCodeToast(email)
        return
    }

    async function handleCodeForm(e) {
        e.preventDefault()
        const email = data.email
        const code = e.target.code.value
        try {
            const res = await getToken(email, code)
            setData({
                ...data,
                isLogged: true,
            })
            const token = res.token
            loginToast()
            saveToken(token)
            router.push("/")
            return
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>
            <div>
                <form onSubmit={handleEmailForm}>
                    <label htmlFor="">Email
                        <input type="email" name="email" />
                    </label>
                    <button>Enviar</button>
                </form>
            </div>
            <div>
                <form onSubmit={handleCodeForm}>
                    <label htmlFor="">Code
                        <input type="text" name="code" />
                    </label>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}