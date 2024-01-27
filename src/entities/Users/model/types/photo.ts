export interface Photo {
    albumId: string;
    id: string;
    title:string;
    url:string;
}

export interface PhotoSchema {
    photos?: Photo[];
    isLoading:boolean;
    error?:string;
}
