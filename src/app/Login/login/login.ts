export class LoginModel {
    Name: string;
    Password: string;

    constructor(name: string, pass: string) {
        this.Name = name;
        this.Password = pass;
    }
}