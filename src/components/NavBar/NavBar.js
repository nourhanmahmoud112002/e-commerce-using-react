import CollapsedMenuButton from "./CollapsedMenuButton";
import AllIcons from "./Icons/Allcons";
import MenuContentList from "./MenuContentList";



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mx-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <CollapsedMenuButton/>
        <MenuContentList/>
        <AllIcons/>
      </div>
    </nav>
  );
};

export default NavBar;
