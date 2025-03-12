const BrandImage = (props) => {
  return (
    <div className={`col-6 col-sm-4 text-center ${props.AddClass}`}>
      <img src={props.imagePath} alt="alternative" className="img-fluid"></img>
    </div>
  );
};

export default BrandImage;
