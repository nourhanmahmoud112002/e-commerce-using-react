const CardImage = (props) => {
  return (
    <img
      src={props.imagePath}
      className="card-img-top"
      alt="card"
      style={{ height: 298, borderRadius: 16 }}
    ></img>
  );
};

export default CardImage;
