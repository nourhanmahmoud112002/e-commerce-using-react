// import axios from "axios";
// const AddData = async (props) => {
//   try {
//     const response = await axios.post(
//       "https://67b5979c07ba6e59083d85e7.mockapi.io/Products_Table",
//       {
//         productName: props.title,
//         price: props.price,
//         priceBefore: props.priceBefore,
//         hasDiscount: props.hasDiscount,
//         discountValue: props.discountValue,
//         category: props.category,
//         image: props.image,
//         reviews: props.reviews,
//       }
//     );
//     console.log("Data added successfully:", response.data);
//     return response.data;
   
//   } catch (error) {
//     console.error(
//       "Error adding data:",
//       error.response ? error.response.data : error.message
//     );
//     return [];
//   }
  
// };

// export default AddData;

import axios from "axios";

const AddOrUpdateData = async (props) => {
  try {
    const url = props.id 
      ? `https://67b5979c07ba6e59083d85e7.mockapi.io/Products_Table/${props.id}` 
      : "https://67b5979c07ba6e59083d85e7.mockapi.io/Products_Table";

    const method = props.id ? "put" : "post";

    const response = await axios({
      method,
      url,
      data: {
        productName: props.title,
        price: +props.price,
        priceBefore: +props.priceBefore,
        hasDiscount: !!props.hasDiscount,
        DiscountValue: +props.DiscountValue,
        
        category: props.category,
        image: props.image,
        reviews: props.reviews,
      },
    });

    console.log(`Data ${props.id ? "updated" : "added"} successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(
      `Error ${props.id ? "updating" : "adding"} data:`,
      error.response ? error.response.data : error.message
    );
    return [];
  }
};

export default AddOrUpdateData;

