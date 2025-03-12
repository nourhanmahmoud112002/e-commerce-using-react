import FooterParagraph from "./FooterParagraph";

const FooterItem = (props) => {
  return (
    <div className="col-6 col-md-2 mb-4">
      <h5 className="fw-bold mb-4" style={{ fontSize: 16, letterSpacing: 3 }}>
        {props.title}
      </h5>

      {props.content.map((item) => {
        return <FooterParagraph title={item} key={Math.random()} />;
      })}
    </div>
  );
};

export default FooterItem;
