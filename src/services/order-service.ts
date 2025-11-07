import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";



export default function orderFindByRequest(id: number) {

    
    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true

        

    }
    

    return requestBackend(config);
}
