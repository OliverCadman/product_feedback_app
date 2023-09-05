import { IComment } from "../AppData/AppDataInterfaces"

export interface ISuggestion {
    id: string,
    status: string,
    upvotes: number,
    description: string,
    title: string,
    comments?: IComment[],
    category: string
}