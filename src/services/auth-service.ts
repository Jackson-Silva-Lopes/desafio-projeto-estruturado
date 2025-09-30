import QueryString from "qs";
import { CredentialDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";


export default function loginRequest(loginData: CredentialDTO) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": "Basic  " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }
    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" })



    console.log(requestBody)
}
