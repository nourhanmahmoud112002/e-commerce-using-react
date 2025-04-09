import "./ShopNowButton.css";
const ShopNowButton = (props) => {
  return (
    <button
      className={`btn btn-custom rounded-pill bg-dark text-light my-3 ${props.AddClass}`}
      style={{ width: 210, height: 52 }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default ShopNowButton;
