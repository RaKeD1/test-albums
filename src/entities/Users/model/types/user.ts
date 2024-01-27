import {Album} from "./album";


export interface User {
    id: string;
    name:string;
    username:string;
    email:string;
    albums?:Album[]
}

export interface UserSchema {
    users: User[];
    isLoading:boolean;
    error?:string;
}
