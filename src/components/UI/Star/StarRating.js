const StarRating = (props) => {
  return (
    <span className="px-1">
      {Number.isInteger(props.starRating)
        ? `${props.starRating}.0`
        : props.starRating}
      /<span className="text-secondary">5</span>
    </span>
  );
};

export default StarRating;
