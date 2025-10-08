
import { ACCESS_TOKEN_KEY } from '../utils/system';

export  function saveAccessToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
}


export function get(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}   

export function removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}