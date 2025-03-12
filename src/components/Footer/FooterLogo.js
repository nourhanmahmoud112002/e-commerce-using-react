import FooterImage from "./FooterImage";

const FooterLogo = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p style={{ fontSize: 14, color: "#00000099" }}>
        Shop.co © 2000-2023, All Rights Reserved
      </p>
      <div>
        <FooterImage imagePath="/assets/svgs/visa.svg"/>
        <FooterImage imagePath="/assets/svgs/Badge (1).svg"/>
        <FooterImage imagePath="/assets/svgs/paypal.svg"/>
        <FooterImage imagePath="/assets/svgs/applepay.svg"/>
        <FooterImage imagePath="/assets/svgs/googlepay.svg"/>
      </div>
    </div>
  );
};

export default FooterLogo;
