import { requestConfig } from "../utils/request-config"

const BASE__URL = 'http://10.107.144.14:3000'

const register = async (data) => {
    const config = requestConfig('POST', data)

    try {
        const res = await fetch(BASE__URL + '/paciente/create', config).then((data) => data.json()).catch((error) => console.error(error))

        return res;

    } catch (error) {
        console.log(error)
        return { error: "Não foi possível concluir a solicitação!" }
    }
}

export default { register }