import ReviewsBody from "./ReviewsBody";
import ReviewsHeader from "./ReviewsHeader";

const Reviews = () => {
  return (
    <section>
      <div className="container-lg my-5">
        <ReviewsHeader/>
        <ReviewsBody/>
      </div>
    </section>
  );
};

export default Reviews;
