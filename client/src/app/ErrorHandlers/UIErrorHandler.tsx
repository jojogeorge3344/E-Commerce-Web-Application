import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../Router/Routes";

const sleep =()=>new Promise(resolve=>setTimeout(resolve,500));

axios.defaults.baseURL = 'http://localhost:1576/api/';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelstateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelstateErrors.push(data.errors[key])
                    }
                }
                throw modelstateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 500:
            router.navigate('/server-error',{state:{error:data}});
            break;
        default:
            break;
    }
    return Promise.reject(error.response)
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, _body: object) => axios.post(url, _body).then(responseBody),
    put: (url: string, _body: object) => axios.put(url, _body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => requests.get('Product'),
    details: (id: number) => requests.get(`Product/${id}`)
}

const TestErrors = {
    get400Error: () => requests.get('ErrorHandler/bad-request'),
    get401Error: () => requests.get('ErrorHandler/unauthorised'),
    get404Error: () => requests.get('ErrorHandler/not-found'),
    get500Error: () => requests.get('ErrorHandler/server-error'),
    getValidationError: () => requests.get('ErrorHandler/validation-error'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;