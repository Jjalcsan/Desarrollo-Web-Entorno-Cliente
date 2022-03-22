export class calculo{

    a : number;
    b : number;
    c : number;
    d : number;

    constructor (a : number, b : number, c: number, d: number){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    
    public suma(a: number, b: number, c?: number, d?: number) {
        return (a+b+c+d);
    }
    
    public resta(a: number, b: number) {
        return (a-b);
    }

}