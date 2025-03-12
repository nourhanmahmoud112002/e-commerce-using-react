const StyleContent = (props) => {
  return (
    <div className="card border-light" style={{ height: 200 ,borderRadius:16,overflow:"hidden"}}>
      <img
        src={props.imagePath}
        className="card-img"
        alt="casual"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          
        }}
      ></img>
      <div className="card-img-overlay">
        <h5 className="card-title py-3 px-3">{props.title}</h5>
      </div>
    </div>
  );
};

export default StyleContent;
