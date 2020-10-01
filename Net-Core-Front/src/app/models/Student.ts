export class Student {
    public id: number;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public age: number;
    public career: string;
    constructor(init?: Partial<Student>) {
        Object.assign(this, init);
    }
}
