import {
  IComment,
  IReply,
  ICategoryListItem,
  IStatusListItem,
  IProductRequest,
  ISortListItem,
  IGenericListItem,
} from "../AppData/appdata.types";

export interface SuggestionListProps {
  productRequests: IProductRequest[];
}

export interface FeedbackFormContainerProps {
  icon: React.ReactNode;
  iconType: string;
  children: React.ReactNode;
}

export interface FeedbackFormProps {
  isEditing: boolean;
  feedbackTitle?: string;
  feedbackDescription?: string;
  feedbackStatus?: string;
  feedbackCategory?: string;
  feedbackId?: string;
}

export interface SuggestionProps {
  id: string;
  status?: string;
  upvotes?: number;
  description?: string;
  title?: string;
  comments?: IComment[];
  category?: string;
  page?: string;
  color?: string;
  index?: number;
  dragStyle?: {
    opacity: number;
    listStyle: string;
  };
  handleUpvoteClick?: (itemId: string) => void;
  userHasUpvoted: boolean;
}

export interface SharedNavBannerProps {
  hasAccompanyingButton?: boolean;
  feedbackId?: string;
  urlPath?: string;
  isRoadmapPage?: boolean;
  historyPath: string;
}

export interface SharedFeedbackHeaderProps {
  textContent: string;
}

export interface BacklinkProps {
  urlPath: string;
}

export interface DropdownProps {
  headerTitle?: string;
  isListOpen: boolean;
  listItems: ICategoryListItem[] | IStatusListItem[];
  selectedItem: ICategoryListItem | IStatusListItem | ISortListItem;
  selectItem: (item: ICategoryListItem | IStatusListItem) => void;
  toggleList: (listType: string) => void;
  listType: string;
  dropdownType?: string;
}

export interface ButtonProps {
  className: string;
  textContent: string;
  buttonType?: "button" | "submit" | "reset";
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
  productId?: string;
}

export interface ReplyProps {
  id?: string;
  commentId?: string;
  imgUrl: string;
  name: string;
  username: string;
  content: string;
  replyingTo: string;
  imageElement?: HTMLImageElement | null;
  isLastReply: boolean;
  getAndSetLineHeight: (calculatedLineHeight?: number) => void;
}

export interface CommentListProps {
  comments?: IComment[];
  productId?: string;
}

export interface ReplyListProps {
  replies?: IReply[];
  imageElement?: HTMLImageElement | null;
  getAndSetLineHeight: (calculatedLineHeight?: number) => void;
  commentId: string | undefined;
}

export interface CommentInputProps {
  handleFormSubmit: (e: React.SyntheticEvent) => void;
  showError?: boolean;
  setComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaValue?: string;
}

export interface ReplyInputProps {
  handleFormSubmit: (e: React.SyntheticEvent) => void;
  showError?: boolean;
  setReply: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  commentHasReplies?: boolean;
  textAreaValue?: string;
}

export interface RoadMapTabProps {
  statusList: IStatusListItem[];
  setSelectedStatus: (item: IStatusListItem, index: number) => void;
  activeTabIndex: number;
}

export interface RoadMapColumnProps {
  id: number | string;
  items: IProductRequest[];
  columnColor?: string;
  name: string;
  description?: string;
}

export interface ToggledTransitionProps {
  isOpen: boolean;
  element?: React.ElementType;
  elementIndex?: number;
  children: React.ReactNode;
}
