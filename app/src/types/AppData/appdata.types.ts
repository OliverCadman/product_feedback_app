export interface IUser {
    image: string,
    name: string,
    username: string
}

export interface IProductRequest {
    id: string,
    title: string,
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments?: IComment[]
}

export interface IComment {
    id: string;
    content: string;
    user: IUser;
    replies?: IReply[];
}

export interface IReply {
    id: string,
    content: string,
    replyingTo: string,
    user: IUser
}

export type IAppData = {
    currentUser: IUser
    productRequests: IProductRequest[]
    
}