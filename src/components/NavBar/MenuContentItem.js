const MenuContentItem = (props) => {
  return (
    <li className={props.class}>
      <a
        className={props.linkClass}
        href={props.link}
        id={props.id}
        role={props.role}
        aria-expanded={props.ariaExpanded}
        data-bs-toggle={props.DataToggle}
      >
        {props.label}
      </a>
    </li>
  );
};

export default MenuContentItem;
