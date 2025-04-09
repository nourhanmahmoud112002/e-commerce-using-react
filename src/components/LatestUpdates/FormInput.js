const FormInput = () => {
  return (
    <div className="input-group mb-3 position-relative">
      <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
        <i className="bi bi-envelope"></i>
      </span>
      <input
        type="email"
        className="form-control rounded-pill ps-5"
        placeholder="Enter your email address"
        style={{ height: 48 }}
      />
    </div>
  );
};

export default FormInput;
