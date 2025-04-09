import { useState } from "react";
import AddProduct from "./AddProduct";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DashboardItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
            onClick={() => setShowModal(true)}
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
      {showModal && (
        <>
          <AddProduct
            title="Update Product"
            onClose={() => setShowModal(false)}
            updateItemId={props.id}
            existingItem={{
              productName: props.title,
              price: props.price,
              priceBefore: props.priceBefore,
              category: props.category,
              hasDiscount: props.hasDiscount,
              DiscountValue: props.discountValue,
              image: props.image,
              reviews: props.reviews,
              id: props.id,
            }}
            onAdd={props.onAdd}
          />
          <div className="modal-backdrop show"></div>
        </>
      )}
    </>
  );
};

export default DashboardItem;

// <div
//   className="my-3"
//   style={{
//     backgroundColor: "#F2F0F1",
//     borderRadius: 16,
//     height: 58,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 20px",
//   }}
// >
//   <div>
//     <span>{props.title}</span>
//     {/* <span style={{ color: "#FF3333", marginLeft: 10 }}>{`$${props.price}`}</span> */}
//   </div>
//   <span className="px-2" style={{ color: "#FF3333", cursor: "pointer" }}>
//     <i
//       className="bi bi-pencil-square px-2"
//       onClick={() => {
//         setShowModal(true);
//       }}
//     ></i>
//     <i
//       className="bi bi-trash3 px-2"
//       onClick={() => {
//         toast.success("Product deleted successfully");
//         return props.onDelete(props.id)
//       }}
//     ></i>
//   </span>
//   {showModal && (
//     <>
//       <AddProduct
//         onClose={() => setShowModal(false)}
//         updateItemId={props.id}
//         existingItem={{
//           productName: props.title,
//           price: props.price,
//           priceBefore: props.priceBefore,
//           category: props.category,
//           hasDiscount: props.hasDiscount,
//           DiscountValue: props.discountValue,
//           image: props.image,
//           reviews: props.reviews,
//           id: props.id
//       }}
//         onAdd={props.onAdd}
//       />
//       <div className="modal-backdrop show"></div>
//     </>
//   )}
// </div>
