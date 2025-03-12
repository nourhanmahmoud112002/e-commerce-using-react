import FindClothesText from "./FindClothesText";
import ShopNowButton from "./ShopNowButton";
import StatisticsContent from "./StatisticsContent";
import Statistics from "./Statistics";

const FashionIntroSection = () => {
  return (
    <div className="col-md-6">
      <FindClothesText />
      <ShopNowButton title="Shop Now"/>
      <br />
      <br />
      <div className="d-flex flex-wrap btn-group" role="group">
        <Statistics AddClass="">
          <StatisticsContent count="200+" label="International Brands" />
        </Statistics>
        <Statistics AddClass="border-start border-end border-1">
          <StatisticsContent count="2,000+" label="High-Quality Products" />
        </Statistics>
        <Statistics AddClass="">
          <StatisticsContent count="30,000+" label="Happy Customers" />
        </Statistics>
      </div>
    </div>
  );
};

export default FashionIntroSection;
