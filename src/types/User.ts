export interface UserI {
    id?:number;
    name: string;
    own: number;
    disown: number;
    created_at?: Date;
    update_at?: Date;
}

export  const emptyUser:UserI ={name:"",own:0,disown:0}