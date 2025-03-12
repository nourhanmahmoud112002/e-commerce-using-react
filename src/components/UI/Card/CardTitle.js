const CardTitle = (props) => {
  return (
    <h4 className="card-title fw-bold" style={{ fontSize: 16 }}>
      {props.title}
    </h4>
  );
};

export default CardTitle;
