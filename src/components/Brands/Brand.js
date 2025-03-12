import BrandImage from "./BrandImage";

const Brand = () => {
  const imagesPath = [
    "/assets/svgs/versace.svg",
    "/assets/svgs/zara-logo-1 1.svg",
    "/assets/svgs/gucci-logo-1 1.svg",
    "/assets/svgs/prada-logo-1 1.svg",
    "/assets/svgs/calvin.svg",
  ];

  return (
    <section className="bg-dark py-3 px-5" id="brands">
      <div className="row justify-content-center g-4">
        {imagesPath.map((path, index) => {
          if (index <= 2) {
            return <BrandImage imagePath={path} AddClass="col-md-2" key={Math.random()}/>;
          } else {
            return <BrandImage imagePath={path} AddClass="col-md-3" key={Math.random()}/>;
          }
        })}
      </div>
    </section>
  );
};

export default Brand;
