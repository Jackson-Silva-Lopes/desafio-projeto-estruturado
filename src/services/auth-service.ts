import { CredentialDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";


export default function loginRequest(loginData: CredentialDTO) {
 const headers = {
     'Content-Type': 'application/x-www-form-urlencoded',
     "Authorization": "Basic  " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
 }  

 console.log(headers)
}
