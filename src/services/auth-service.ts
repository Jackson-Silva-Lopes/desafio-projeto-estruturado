import QueryString from "qs";
import { CredentialDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import * as accessTokenRepository from "../localStorage/acces-token-repository"


export function loginRequest(loginData: CredentialDTO) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }


    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" })
  

    const config: AxiosRequestConfig = {
        method: 'POST',
        url: '/oauth/token',
        data: requestBody,
        headers: headers,
    }


   return requestBackend(config);
}


export function logout() {
    accessTokenRepository.removeAccessToken();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.saveAccessToken(token);
}

export  function getAccessToken(): string | null {
    return accessTokenRepository.get();
}