const Icon = (props) => {
  return (
    <span className="py-2 mx-3">
      <img src={props.src} alt={props.alt} className="img-fluid"></img>
    </span>
  );
};

export default Icon;
