import CardBody from "./CardBody";
import CardImage from "./CardImage";

const Card = (props) => {
  return (
    <div className="col-6 col-md-3">
      <div className="card border-light">
        <CardImage imagePath={props.imagePath} />
        <CardBody
          hasDiscount={props.hasDiscount}
          price={props.price}
          discount={props.discount}
          priceBefore={props.priceBefore}
          title={props.title}
          starRating={props.starRating}
        />
      </div>
    </div>
  );
};

export default Card;
