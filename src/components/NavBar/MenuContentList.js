import MenuContentItem from "./MenuContentItem";
import { Link } from "react-router-dom";

const MenuContentList = () => {
  const contentList = [
    {
      href: "#shop",
      label: "Shop",
    },
    {
      href: "#onsale",
      label: "On Sale",
    },
    {
      href: "#new-arrivals",
      label: "New Arrivals",
    },
    {
      href: "#brands",
      label: "Brands",
    },
  ];
  return (
    <div
      className="collapse navbar-collapse d-lg-flex"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {contentList.map((item, index) => {
          if (index === 0) {
            return (
              <MenuContentItem
                href={item.href}
                label={item.label}
                class="nav-item dropdown"
                linkClass="nav-link dropdown-toggle active"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                key={Math.random()}
              />
            );
          } else {
            return (
              <MenuContentItem
                href={item.href}
                label={item.label}
                class="nav-item"
                linkClass="nav-link active"
                key={Math.random()}
              />
            );
          }
        })}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuContentList;
