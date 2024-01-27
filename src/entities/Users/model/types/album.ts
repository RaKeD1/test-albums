import {Photo} from "./photo";

export interface Album {
    albumId: string;
    userId: string;
    title:string;
    photos?:Photo[];
}

export interface AlbumSchema {
    albums?: Album[];
    isLoading:boolean;
    error?:string;
}
