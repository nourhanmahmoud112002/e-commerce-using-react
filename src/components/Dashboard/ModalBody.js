import AddorUpdataData from "../../data/AddorUpdateData";
import InputField from "./InputField";
import { useState, useEffect } from "react";
import ModalFooter from "./ModalFooter";
import ImageUploader from "./DragAndDropImage";
import CategoryDropDownMenu from "./CategoryDropDownMenu";
import HasDiscountRadioButton from "./HasDiscountRadioButton";
const ModalBody = ({ onClose, onAdd, updateItemId, existingItem }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [category, setCategory] = useState("");
  const [hasDiscount, setHasDiscount] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [image, setImage] = useState("");
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    if (existingItem) {
      setTitle(existingItem.productName || "");
      setPrice(existingItem.price || "");
      setPriceBefore(existingItem.priceBefore || "");
      setCategory(existingItem.category || "");
      setHasDiscount(existingItem.hasDiscount || "");
      setDiscountValue(existingItem.DiscountValue || "");
      setImage(existingItem.image || "");
      setReviews(existingItem.reviews || "");
    }
  }, [existingItem]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await AddorUpdataData({
      id: updateItemId,
      title: title,
      price: price,
      priceBefore: priceBefore,
      hasDiscount: hasDiscount,
      DiscountValue: discountValue,
      category: category,
      image: image,
      reviews: +reviews,
    });
    //   onAdd((prevItems) => [...prevItems, response]);
    onAdd((prevItems) => {
      if (updateItemId) {
        // Update existing item
        return prevItems.map((item) =>
          item.id === updateItemId ? response : item
        );
      } else {
        // Add new item
        return [...prevItems, response];
      }
    });

    onClose();
  };
  return (
    <div className="modal-body">
      <form onSubmit={submitHandler}>
        <InputField
          label="Product Name :"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <InputField
          label="Price :"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <InputField
          label="Price Before :"
          onChange={(e) => setPriceBefore(e.target.value)}
          value={priceBefore}
        />
        <CategoryDropDownMenu
          setCategory={setCategory}
          existingCategory={category}
        />
        <HasDiscountRadioButton
          setHasDiscount={setHasDiscount}
          existingHasDiscount={hasDiscount}
        />
        <InputField
          label="Discount Value :"
          onChange={(e) => setDiscountValue(e.target.value)}
          value={discountValue}
        />
        <ImageUploader setImage={setImage} existingImage={image} />
        <InputField
          label="Reviews :"
          onChange={(e) => setReviews(e.target.value)}
          value={reviews}
        />
        <ModalFooter onClick={onClose} AddBool={updateItemId ? false : true} />
      </form>
    </div>
  );
};
export default ModalBody;
