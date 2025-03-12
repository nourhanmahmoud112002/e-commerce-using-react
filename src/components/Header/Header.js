const Header = () => {
  return (
    <div className="bg-dark text-light">
      <div className="text-center position-relative py-2">
        <p className="m-0">
          Sign up and get 20% off your first order.
          <span className="text-decoration-underline">Sign Up Now</span>
        </p>
        <button
          type="button"
          className="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y px-5"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Header;
