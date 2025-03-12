import CardTitle from "./CardTitle";
import FilledStar from "../Star/FilledStar";
import HalfStar from "../Star/HalfStar";
import StarRating from "../Star/StarRating"
import PriceWithDiscount from "../PriceWithDiscount"
import PriceWithoutDiscount from "../PriceWithoutDiscount"

const CardBody = (props) => {
  const stars = [];
  let price;
  for (let i = 0; i < Math.floor(props.starRating); i++) {
    stars.push(<FilledStar key={Math.random()}/>);
  }
  if (!Number.isInteger(props.starRating)) {
    stars.push(<HalfStar key={Math.random()} />);
  }
  if(props.hasDiscount){
    price=<PriceWithDiscount price={props.price} discount={props.discount} priceBefore={props.priceBefore}/>
  }
  else{
    price=<PriceWithoutDiscount price={props.price} />
  }
  return (
    <div className="card-body">
      <CardTitle title={props.title} />
      <div className="card-text">
        {stars}
        <StarRating starRating={props.starRating}/>
        {price}
        </div>
    </div>
  );
};
export default CardBody;
