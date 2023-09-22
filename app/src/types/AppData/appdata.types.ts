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

export interface IAppData {
    currentUser: IUser;
    productRequests: IProductRequest[];
}

export type AppData = {
    data: {
        currentUser: IUser;
        productRequests: IProductRequest[];
    }
    isInputValid: boolean | undefined;
    commentInput: '';
    invalidInputFlagRaised: boolean;
    showError: boolean;
    showReplyInput: boolean;
    idOfCommentReceivingReply: string | undefined;

}

