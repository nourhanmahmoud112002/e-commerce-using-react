import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

const AddProduct = ({ onClose,onAdd,updateItemId,existingItem ,title}) => {
  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader onClick={onClose} title={title}/>
          <ModalBody onClose={onClose} onAdd={onAdd} updateItemId={updateItemId} existingItem={existingItem}/>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
