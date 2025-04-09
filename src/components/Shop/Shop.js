import FashionIntroSection from "./FashionIntroSection";
import FashionImageSection from "./FashionImageSection";
import "./Shop.css";

const Shop = () => {
  return (
    <section className="pt-5" id="shop" style={{ backgroundColor: "#F2F0F1" }}>
      <div className="row justify-content-center align-items-center mx-5">
        <FashionIntroSection />
        <FashionImageSection />
      </div>
    </section>
  );
};

export default Shop;
