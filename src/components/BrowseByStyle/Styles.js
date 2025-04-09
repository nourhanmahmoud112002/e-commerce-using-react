const Styles = (props) => {
  return (
    <div
      className={`row justify-content-center align-items-center mx-1 ${props.ParentClass}`}
    >
      {props.children}
    </div>
  );
};

export default Styles;
