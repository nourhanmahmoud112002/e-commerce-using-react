// import DataFilteration from "../data/DataFilteration";
// import Card from "./UI/Card/Card";
// import SectionHeader from "./UI/SectionHeader";
// import ViewAllButton from "./UI/ViewAllButton";
// import { useEffect,useState } from "react";
// import "./N.css"
// const NewArrivalAndOnSale = (props) => {

//   const [data,setData]=useState([]);

//   useEffect(() => {

//     const fetchData = async () => {
//       const data = await DataFilteration(props.category);
//       setData(data);
//     };
//     fetchData();

//   },[])

//   return (
//     <section className="my-5 scrollable" id="new-arrivals">
//       <div className="container-lg">
//         <div className="row justify-content-center align-items-center my-5">
//           <SectionHeader title={props.title} />
//           {data.map((item) => (

//             <Card
//               title={item.productName}
//               imagePath={item.image}
//               starRating={item.reviews}
//               hasDiscount={item.hasDiscount}
//               discount={item.DiscountValue}
//               price={item.price}
//               priceBefore={item.priceBefore}
//               key={item.id}
//             />
//           ))}

//         </div>
//         <ViewAllButton/>
//       </div>
//     </section>
//   );
// };
// export default NewArrivalAndOnSale;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DataFilteration from "../data/DataFilteration";
import Card from "./UI/Card/Card";
import SectionHeader from "./UI/SectionHeader";
import ViewAllButton from "./UI/ViewAllButton";
import { useState, useEffect } from "react";

const NewArrivalAndOnSale = (props) => {
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = await DataFilteration(props.category);
      setData(filteredData);
    };
    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.category]);

  return (
    <section className="my-5" id="new-arrivals">
      <div className="container-lg">
        <div className="row justify-content-center align-items-center my-5">
          <SectionHeader title={props.title} />
          {isMobile ? (
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1},
                600: { slidesPerView: 2 },
              }}
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    title={item.productName}
                    imagePath={item.image}
                    starRating={item.reviews}
                    hasDiscount={item.hasDiscount}
                    discount={item.DiscountValue}
                    price={item.price}
                    priceBefore={item.priceBefore}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            data.map((item) => (
              <Card
                title={item.productName}
                imagePath={item.image}
                starRating={item.reviews}
                hasDiscount={item.hasDiscount}
                discount={item.DiscountValue}
                price={item.price}
                priceBefore={item.priceBefore}
                key={item.id}
              />
            ))
          )}
        </div>
        <ViewAllButton />
      </div>
    </section>
  );
};

export default NewArrivalAndOnSale;
