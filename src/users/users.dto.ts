export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
}

export interface UserInfoLogin {
    email: string,
    id: number,
    iat: number,
    exp: number
}