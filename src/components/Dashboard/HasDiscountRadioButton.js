import { useState, useEffect } from "react";

function HasDiscountRadioButton({ existingHasDiscount, setHasDiscount }) {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (existingHasDiscount!==undefined) {
      setSelectedOption(existingHasDiscount?"true":"false");
    }
  }, [existingHasDiscount]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setHasDiscount(value==="true"); 
  };

  return (
    <div className="mb-2">
      <p>Has Discount :</p>  
      <label className="block mb-2 px-4">
        <input
          type="radio"
          value="true"
          checked={selectedOption === "true"}
          onChange={handleChange}
          className="mr-2"
        />
        True
      </label>

      <label className="block mb-2">
        <input
          type="radio"
          value="false"
          checked={selectedOption === "false"}
          onChange={handleChange}
          className="mr-2"
        />
        False
      </label>
    </div>
  );
}

export default HasDiscountRadioButton;
