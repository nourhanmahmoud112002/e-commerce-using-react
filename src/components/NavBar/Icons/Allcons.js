import DesktopSearchIcon from "./DesktopSearchIcon";
import Icon from "./Icon";
import MobileSearchIcon from "./MobileSearchIcon";

const AllIcons = () => {
  return (
    <div className="d-flex">
      <MobileSearchIcon />
      <DesktopSearchIcon />
      <Icon src="/assets/svgs/cart.svg" alt="cart" />
      <Icon src="/assets/svgs/person.svg" alt="person" />
    </div>
  );
};

export default AllIcons;
