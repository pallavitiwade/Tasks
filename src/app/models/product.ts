export interface Iproduct {
    pName: string;
    Pdetail: string;
    pStatus: any;
    pId: string;
}

export enum IEnumProduct {
    Inprogress='Inprogress',
    Dispatch='Dispatch',
    Delivered='Delivered'
}

export interface IRes<T>{
    msg : string;
    data : T
}