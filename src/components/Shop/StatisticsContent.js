const StatisticsContent = (props) => {
  return (
    <>
      <p className="fw-bold fs-2">{props.count}</p>
      <p className="text-secondary">{props.label}</p>
    </>
  );
};

export default StatisticsContent;
