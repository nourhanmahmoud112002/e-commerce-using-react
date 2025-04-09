const InputField = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input
        type="text"
        className="form-control"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
export default InputField;
