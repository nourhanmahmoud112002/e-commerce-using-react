import DashboardItem from "./DashboardItem";
const DashboardTable=props=>{


    return  <table className="table table-bordered mt-3" >
    <thead className="thead-dark" >
      <tr style={{ height: "80px", textAlign: "center", verticalAlign: "middle", backgroundColor: "#f8f9fa", fontWeight: "bold" }} >
        <th>Product Name</th>
        <th>Price</th>
        <th>Price Before</th>
        <th>Discount</th>
        <th>Category</th>
        <th>Reviews</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map((item) => {
        return (
          <DashboardItem
            key={item.id}
            title={item.productName}
            price={item.price}
            priceBefore={item.priceBefore}
            hasDiscount={item.hasDiscount}
            discountValue={item.DiscountValue}
            category={item.category}
            image={item.image}
            reviews={item.reviews}
            id={item.id}
            onDelete={props.onDelete}
            onAdd={props.onAdd} />
        );
      })}
    </tbody>
  </table>

}

export default DashboardTable;