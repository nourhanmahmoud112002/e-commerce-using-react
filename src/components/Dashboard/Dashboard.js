import ShopNowButton from "../Shop/ShopNowButton";
import DataFetching from "../../data/data";
import { useState, useEffect } from "react";
import DeleteData from "../../data/DeleteData";
import AddProduct from "./AddProduct";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  let [items, setItems] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
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
  const AddHandler=(response)=>{
    setItems((response))
  }
  return (
    <div className="m-5">
      <ShopNowButton
        title="Add Product"
        onClick={() => {
          setShowAddProduct(true);
        }}
      />
      
      <DashboardTable items={items} onAdd={AddHandler} onDelete={handleDelete}/>
      {showAddProduct && (
        <>
          <AddProduct onClose={() => setShowAddProduct(false)} onAdd={AddHandler}/>
          <div className="modal-backdrop show"></div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
