import StyleItem from "./StyleItem";
const StylesGrid = (props) => {
    return (
      <>
        {props.styles.map((item) => (
          <StyleItem
            title={item.title}
            imagePath={item.imagePath}
            AddClass={item.className}
            key={item.title}
          />
        ))}
      </>
    );
  };
  
  export default StylesGrid;
  