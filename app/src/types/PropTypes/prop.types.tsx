import { IComment } from "../AppData/appdata.types"

export interface ISuggestion {
    id: string,
    status: string,
    upvotes: number,
    description: string,
    title: string,
    comments?: IComment[],
    category: string
}

export interface IButton {
    className: string,
    textContent: string
}