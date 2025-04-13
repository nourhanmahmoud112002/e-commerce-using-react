import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardItem = (props) => {
  return (
    <tr
      style={{ height: "80px", textAlign: "center", verticalAlign: "middle" }}
    >
      <td
        style={{ width: "300px", textAlign: "left", verticalAlign: "middle" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={props.image}
            alt={props.title}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <span>{props.title}</span>
        </div>
      </td>
      <td>${props.price}</td>
      <td>${props.priceBefore}</td>
      <td>
        {props.hasDiscount === true || props.hasDiscount === "true"
          ? `${props.discountValue}%`
          : "No Discount"}
      </td>
      <td>{props.category}</td>
      <td>{props.reviews}</td>
      <td>
        <i
          className="bi bi-pencil-square px-2"
          onClick={() =>
            props.onEdit({
              productName: props.title,
              price: props.price,
              priceBefore: props.priceBefore,
              category: props.category,
              hasDiscount: props.hasDiscount,
              DiscountValue: props.discountValue,
              image: props.image,
              reviews: props.reviews,
              id: props.id,
            })
          }
          style={{ cursor: "pointer", color: "#007bff" }}
        ></i>
        <i
          className="bi bi-trash3 px-2"
          onClick={() => {
            toast.success("Product deleted successfully");
            props.onDelete(props.id);
          }}
          style={{ cursor: "pointer", color: "red" }}
        ></i>
      </td>
    </tr>
  );
};

export default DashboardItem;
