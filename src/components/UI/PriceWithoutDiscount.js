const PriceWithoutDiscount = (props) => {
  return (
    <p className="fw-bold" style={{ fontSize: 24 }}>{`$${props.price}`}</p>
  );
};
export default PriceWithoutDiscount;
