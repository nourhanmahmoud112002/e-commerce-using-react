import StyleContent from "./StyleContent";

const StyleItem = (props) => {
  return (
    <div className={props.AddClass}>
      <StyleContent imagePath={props.imagePath} title={props.title} />
    </div>
  );
};

export default StyleItem;
