import { IComment, IReply } from "../AppData/appdata.types";

export interface SuggestionProps {
    id?: string;
    status?: string;
    upvotes?: number;
    description?: string;
    title?: string;
    comments?: IComment[];
    category?: string;
    page?: string;
}

export interface ButtonProps {
    className: string;
    textContent: string;
}

export interface CommentProps {
    id?: string;
    imgUrl: string;
    name: string;
    username: string;
    content: string;
    replies?: IReply[] 
    lastComment: boolean;
}

export interface ReplyProps {
    id?: string;
    imgUrl: string;
    name: string;
    username: string;
    content: string;
    replyingTo: string;
}

export interface CommentListProps {
    comments?: IComment[];
}

export interface ReplyListProps {
    replies?: IReply[]
}

