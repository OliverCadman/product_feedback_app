import Suggestion from "../Suggestion/Suggestion";
import { UseAppContext } from "../../context/AppDataContext";
import { IProductRequest } from "../../types/AppData/appdata.types";
import { SuggestionListProps } from "../../types/PropTypes/prop.types";

const SuggestionList: React.FC<SuggestionListProps> = ({ productRequests }) => {
  const { state } = UseAppContext();

  return (
    <section className="section-list">
      {productRequests?.map((request: IProductRequest) => {
        const { id, description, status, title, upvotes, comments, category } =
          request;
        return (
          <Suggestion
            key={id}
            id={id}
            description={description}
            status={status}
            title={title}
            upvotes={upvotes}
            comments={comments}
            category={category}
            page="product-feedback"
          />
        );
      })}
    </section>
  );
};

export default SuggestionList;
