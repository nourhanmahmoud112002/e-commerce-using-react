const FashionImageSection = () => {
  return (
    <div className="col-md-5 position-relative">
      <img
        src="/assets/images/image1.jpg"
        alt="first"
        style={{ width: 500 }}
        className="img-fluid"
      />
      <div className="position-absolute top-0 end-0 py-2">
        <img src="/assets/svgs/big-star.svg" alt="big-star" />
      </div>
    </div>
  );
};

export default FashionImageSection;
