import { useEffect } from "react";
import Suggestion from "../Suggestion/Suggestion";
import { UseAppContext } from "../../context/AppDataContext";
import { IProductRequest } from "../../types/AppData/appdata.types";
import { SuggestionListProps } from "../../types/PropTypes/prop.types";
import { Transition } from "@headlessui/react";

const SuggestionList: React.FC<SuggestionListProps> = ({ productRequests }) => {
  const { state, dispatch } = UseAppContext();

  useEffect(() => {
    console.log("hi");
    dispatch({ type: "RESET_SHOW_PRODUCT_LIST", payload: null });
  }, [state.data.productRequests]);

  return (
    <div className="section-list__container">
      <section className="section-list">
        {productRequests?.map((request: IProductRequest, index: number) => {
          const {
            id,
            description,
            status,
            title,
            upvotes,
            comments,
            category,
          } = request;
          return (
            // <Transition
            //   appear
            //   key={id}
            //   show={state.isProductListShowing}
            //   style={{ transitionDelay: `${50 * index}ms` }}
            //   enter="transition ease-out duration-300"
            //   enterFrom="transform opacity-0 translate-y-40"
            //   leave="no-transition"
            //   leaveFrom="transform opacity-100 translate-y-0"
            //   leaveTo="opacity-0"
            // >
            <Suggestion
              id={id}
              description={description}
              status={status}
              title={title}
              upvotes={upvotes}
              comments={comments}
              category={category}
              index={index}
              page="product-feedback"
            />
            // </Transition>
          );
        })}
      </section>
    </div>
  );
};

export default SuggestionList;
