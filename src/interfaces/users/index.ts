export interface IUserRequest {
    name: string
    email: string
    password: string
    pix: string
    cpf: string
}

export interface IUser {
    id: string
    name: string
    email: string
    pix: string
    cpf: string
    value: number
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    email?: string
    pix?: string
    password?: string
}