export class User {

    userId: number
    userEmail: string
    userName: string
    userPhoto: string
    isAdmin : boolean = false;

    constructor(id: number, email: string, name: string, photo: string, admin:boolean = false) {
        this.userId = id
        this.userEmail = email
        this.userName = name
        this.userPhoto = photo
        this.isAdmin = admin
    }

}