import React from "react";
import { Transition } from "framer-motion";
import { DeleteModalProps } from "../../types/PropTypes/prop.types";

const DeleteModal: React.FC<DeleteModalProps> = ({
  itemTitle,
  handleDelete,
  itemId,
  closeModal,
}) => {
  return (
    <div className="modal__overlay flex centered">
      <aside className="modal">
        <div className="confirm-delete__content">
          <h2>Delete this suggestion?</h2>
          <p>
            Are you sure you want to delete the <span>'{itemTitle}'</span>{" "}
            suggestion?
          </p>
          <p> This action cannot be reversed.</p>
        </div>
        <div className="flex delete-btn__container">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => itemId && handleDelete(itemId)}
          >
            Delete
          </button>
          <button
            className="btn btn-dark-blue"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DeleteModal;
