import FilledStar from "../UI/Star/FilledStar";
const ReviewsBody = (props) => {
  let stars=[];
  for (let i = 0; i < 5; i++) {
    stars.push(<FilledStar key={Math.random()} />);
  }
  return (
    <div className="item">
      <div className="card px-3 py-3" style={{ borderRadius: 16 }}>
        <div className="card-body">
          <h5 className="card-title mb-4">{stars}</h5>
          <h6 className="card-subtitle mb-2 fw-bold" style={{fontSize:20}}>
           {props.name}
            <span>
              <i className="bi bi-check-circle-fill" style={{color:"#01AB31"}}></i>
            </span>
          </h6>
          <p className="card-text text-secondary" style={{fontSize:16}}>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsBody;
