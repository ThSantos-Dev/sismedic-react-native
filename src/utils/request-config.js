

export const requestConfig = (
    method,
    data,
    token,
) => {
    let config;

    // Se vier a imagem, significa que os dados não poderá ser encaminhado no formato json, mas sim em form data
    if (method === "DELETE" || data === null) {
        config = {
            method,
            headers: {},
        };
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
    }

    //   Caso haja token, ira repassá-lo na requisição
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};