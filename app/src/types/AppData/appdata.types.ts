export interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface IProductRequest {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: IComment[];
}

export interface ICategoryListItem {
  id: number;
  selected: boolean;
  title: string;
  key: string;
}

export interface IStatusListItem {
  id: number;
  selected: boolean;
  title: string;
  key: string;
  description: string;
  color: string;
}

export interface IComment {
  id: string;
  content: string;
  user: IUser;
  replies?: IReply[];
}

export interface IReply {
  id: string;
  content: string;
  replyingTo: string;
  user: IUser;
}

export interface IAppData {
  currentUser: IUser;
  productRequests: IProductRequest[];
}

export interface IReplyToggler {
  showReply: false;
  replyingTo: string;
}

export interface IInput {
  isInputValid: boolean;
  inputValue: string;
  invalidInputFlagRaised: boolean;
  showError: boolean;
}

export type AppData = {
  data: {
    currentUser: IUser;
    productRequests: IProductRequest[];
  };
  dropdownState: {
    categoryDropdown: {
      isDropdownOpen: boolean;
      selectedItem: string;
    };
    statusDropdown: {
      isDropdownOpen: boolean;
      selectedItem: string;
    };
  };
  mobileNavOpen: boolean;
  categories: ICategoryListItem[];
  statuses: IStatusListItem[];
  isInputValid: boolean | undefined;
  commentInput: "";
  replyInput: "";
  invalidInputFlagRaised: boolean;
  showCommentInputError: boolean;
  showReplyInputError: boolean;
  replyToggler: IReplyToggler;
  idOfCommentReceivingReply: string | undefined;
  feedbackFormInputs: {
    titleInput: IInput;
    descriptionInput: IInput;
  };
  activeTabIndex: number;
};
