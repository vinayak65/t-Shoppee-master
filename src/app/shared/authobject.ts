export class AuthObject {

    userId: number
    userEmail: string
    user: string
    password: string

    constructor(id: number, email: string, name: string,password: string) {
        this.userId = id
        this.userEmail = email
        this.user = name
       this.password  = password
    }

}
