const SectionHeader = (props) => {
  return (
    <h1 className={`text-center fw-bolder ${props.AddClass}`}style={{ fontSize: 48,marginBottom: "48px" }}>
      {props.title}
    </h1>
  );
};

export default SectionHeader;
