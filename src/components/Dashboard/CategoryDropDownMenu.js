import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function CategoryDropDownMenu({ setCategory, existingCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(existingCategory || "Choose Category");

  // Update the selected category if existingCategory changes
  useEffect(() => {
    if (existingCategory) {
      setSelectedCategory(existingCategory);
    }
  }, [existingCategory]);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setCategory(category); // Update the parent component if necessary
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedCategory}
      variant="secondary"
      className="my-4"
    >
      <Dropdown.Item onClick={() => handleSelect("TOP SELLING")}>
        TOP SELLING
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleSelect("NEW ARRIVALS")}>
        NEW ARRIVALS
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default CategoryDropDownMenu;
