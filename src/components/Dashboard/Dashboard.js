import ShopNowButton from "../Shop/ShopNowButton";
import DataFetching from "../../data/FetchData";
import { useState, useEffect } from "react";
import DeleteData from "../../data/DeleteData";
import AddProduct from "./AddProduct";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await DataFetching();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await DeleteData(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const AddHandler = (response) => {
    setItems(response);
    setItemToEdit(null); // Clear edit state
  };

  const onEdit = (item) => {
    setItemToEdit(item);
    setShowAddProduct(true);
  };

  return (
    <div className="m-5">
      <ShopNowButton
        title="Add Product"
        onClick={() => {
          setItemToEdit(null);
          setShowAddProduct(true);
        }}
      />

      <DashboardTable
        items={items}
        onAdd={AddHandler}
        onDelete={handleDelete}
        onEdit={onEdit}
      />

      {showAddProduct && (
        <>
          <AddProduct
            onClose={() => {
              setShowAddProduct(false);
              setItemToEdit(null);
            }}
            onAdd={AddHandler}
            updateItemId={itemToEdit?.id}
            existingItem={itemToEdit}
            title={itemToEdit ? "Update Product" : "Add Product"}
          />
          <div className="modal-backdrop show"></div>
        </>
      )}
    </div>
  );
};


export default Dashboard;
