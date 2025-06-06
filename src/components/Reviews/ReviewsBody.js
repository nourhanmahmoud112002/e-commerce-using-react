import ReviwsItem from "./ReviewsItem";
const ReviewsBody = () => {
  const reviews = [
    {
      name: "Sarah M.",
      content:
        "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      name: "Alex K.",
      content:
        '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.”',
    },
    {
      name: "James L.",
      content:
        "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
    {
      name: "Sarah M.",
      content:
        "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      name: "Alex K.",
      content:
        '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.”',
    },
    {
      name: "James L.",
      content:
        "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
  ];

  return (
    <div className="owl-carousel owl-theme">
      {reviews.map((item) => {
        return (
          <ReviwsItem
            name={item.name}
            content={item.content}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default ReviewsBody;
