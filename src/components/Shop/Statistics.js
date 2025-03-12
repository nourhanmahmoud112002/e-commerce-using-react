const Statistics = (props) => {
  return (
    <button
      type="button"
      className={`btn mb-2 mb-md-0 col-6 col-md-4 ${props.AddClass}`}
    >
      {props.children}
    </button>
  );
};

export default Statistics;
