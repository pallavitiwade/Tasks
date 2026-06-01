
export interface Ipassanger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate:null | number;
    children: null | Ipasschild[]
}

export interface Ipasschild{
      name:string;
    age:number;
}