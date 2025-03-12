const FindClothesText = () => {
  return (
    <>
      <p className="fw-bold fs-36-mobile">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
      <p className="text-secondary d-flex align-items-center justify-content-between position-relative">
        Browse through our diverse range of meticulously crafted garments,
        <br />
        designed to bring out your individuality and cater to your sense of
        style.
        <span className="position-relative">
          <img
            src="assets/svgs/small-star.svg"
            alt="small-star"
            className="img-fluid"
            style={{width:40}}
          />
        </span>
      </p>
    </>
  );
};

export default FindClothesText;
