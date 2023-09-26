import { IComment, IReply, ICategoryListItem } from "../AppData/appdata.types";

export interface FeedbackFormContainerProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

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

export interface SharedNavBannerProps {
  hasAccompanyingButton: boolean | undefined;
}

export interface SharedFeedbackHeaderProps {
  textContent: string;
}

export interface DropdownProps {
  headerTitle: string | undefined;
  isListOpen: boolean;
  listItems: ICategoryListItem[];
  selectedItem: ICategoryListItem | undefined;
  selectItem: (item: ICategoryListItem) => void;
  toggleList: () => void;
}

export interface ButtonProps {
  className: string;
  textContent: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isReplyButton: boolean;
}

export interface CommentProps {
  id?: string;
  imgUrl: string;
  name: string;
  username: string;
  content: string;
  replies?: IReply[];
  lastComment: boolean;
  productId: string | undefined;
}

export interface ReplyProps {
  id?: string;
  commentId: string | undefined;
  imgUrl: string;
  name: string;
  username: string;
  content: string;
  replyingTo: string;
  imageElement: HTMLImageElement | null | undefined;
  isLastReply: boolean;
  getAndSetLineHeight: (calculatedLineHeight: number | undefined) => void;
}

export interface CommentListProps {
  comments?: IComment[];
  productId: string | undefined;
}

export interface ReplyListProps {
  replies?: IReply[];
  imageElement: HTMLImageElement | null | undefined;
  getAndSetLineHeight: (calculatedLineHeight: number | undefined) => void;
  commentId: string | undefined;
}

export interface CommentInputProps {
  handleFormSubmit: (e: React.SyntheticEvent) => void;
  showError: boolean | undefined;
  setComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaValue: string | undefined;
}

export interface ReplyInputProps {
  handleFormSubmit: (e: React.SyntheticEvent) => void;
  showError: boolean | undefined;
  setReply: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  commentHasReplies: boolean | undefined;
  textAreaValue: string | undefined;
}
