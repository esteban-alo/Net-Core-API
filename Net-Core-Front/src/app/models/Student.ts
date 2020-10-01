export interface IStudent {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
    career: string;
}

export class Student {
    public id: number;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public age: number;
    public career: string;
    constructor() {
        this.id = null;
        this.userName = "";
        this.firstName = "";
        this.age = 0;
        this.career = "";
    }
}
