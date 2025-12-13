export class User {



    constructor(
        private _duelantId: number, 
        private _username: string,
        private _email: string,
        private _password: string,
    ){}

    public get duelantId(): number {
        return this._duelantId;
    }

    public set duelantId(value: number) {
        this._duelantId = value;
    }

    public get username(): string {
        return this._username;
    }
    
    public set username(value: string) {
        this._username = value;
    }
    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public set password(value: string) {
        this._password = value;
    }
}