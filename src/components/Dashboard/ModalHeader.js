const ModalHeader = (props) => {
  const title=props.title || "Add Product";
  return (
    <div className="modal-header">
      <h5 className="modal-title">{title}</h5>
      <button
        type="button"
        className="btn-close"
        onClick={props.onClick}
        aria-label="Close"
      ></button>
    </div>
  );
};
export default ModalHeader;
