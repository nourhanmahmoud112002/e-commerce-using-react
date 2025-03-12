import ShopCoBrand from "./ShopCoBrand";

const CollapsedMenuButton = () => {
  return (
    <div className="d-flex align-items-center">
      <button
        className="navbar-toggler d-lg-none me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <!-- SHOP.CO brand --> */}
      <ShopCoBrand/>
    </div>
  );
};

export default CollapsedMenuButton;
