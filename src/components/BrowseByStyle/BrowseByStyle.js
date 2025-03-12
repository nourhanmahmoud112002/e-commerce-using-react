import SectionHeader from "../UI/SectionHeader";
import Styles from "./Styles";
import StylesGrid from "./StylesGrid";

const BrowseByStyle = () => {
  const stylesFirstRow = [
    {
      className: "col-md-3",
      imagePath: "/assets/images/casual.png",
      title: "Casual",
    },
    {
      className: "col-md-7",
      imagePath: "/assets/images/formal.png",
      title: "Formal",
    },
  ];
  const stylesSecondRow = [
    {
      className: "col-md-7",
      imagePath: "/assets/images/party.png",
      title: "Party",
    },
    {
      className: "col-md-3",
      imagePath: "/assets/images/gym.png",
      title: "Gym",
    },
  ];
  return (
    <section className="justify-content-center align-items-center">
      <div
        className="container-lg m-0 m-md-5  bg-light border border-light"
        style={{ borderRadius: 16 }}
      >
        <SectionHeader title="BROWSE BY DRESS STYLE" AddClass="pt-5 pb-2" />
        <Styles ParentClass="mb-2">
          <StylesGrid styles={stylesFirstRow}/>
        </Styles>
        <Styles ParentClass="mb-5">
          <StylesGrid styles={stylesSecondRow}/>
        </Styles>
      </div>
    </section>
  );
};
export default BrowseByStyle;
