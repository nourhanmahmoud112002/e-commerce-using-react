import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalFooter = (props) => {
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.onClick}
      >
        Close
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          if (props.AddBool) {
            toast.success("Product Added successfully");
            console.log("Toast Added");
          } else {
            toast.success("Product updated successfully");

            console.log("Toast Updated");
          }

          return props.onClose;
        }}
      >
        Save changes
      </button>
    </div>
  );
};
export default ModalFooter;
