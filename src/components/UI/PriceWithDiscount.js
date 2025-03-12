const PriceWithDiscount = (props) => {
  return (
    <p
      className="fw-bold"
      style={{ fontSize: 24, display: "flex", alignItems: "center" }}
    >
      {`$${props.price}`}
      <span
        className="text-decoration-line-through fw-bold px-2"
        style={{ color: "#00000066", fontSize: 24 }}
      >
       {`$${props.priceBefore}`}
      </span>
      <button
        className="btn rounded-pill btn-sm"
        style={{
          backgroundColor: "#FF33331A",
          color: "#FF3333",
          fontWeight: 500,
          width: 58,
          height: 28,
          marginLeft: 10,
        }}
      >
        {`-${props.discount}%`}
      </button>
    </p>
  );
};

export default PriceWithDiscount;
