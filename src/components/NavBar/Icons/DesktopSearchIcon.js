const DesktopSearchIcon = () => {
  const IconColor = "#00000066";
  return (
    <button
      className="rounded-pill bg-light border border-1 border-bg-light mx-3 px-4 py-1 text-start d-none d-lg-block"
      style={{ width: 500 }}
    >
      <span>
        <i className="bi bi-search" style={{ color: IconColor }}></i>
      </span>
      <span className="mx-2" style={{ color: IconColor }}>
        Search for products...
      </span>
    </button>
  );
};

export default DesktopSearchIcon;
