import DataFetching from "./FetchData";


const DataFilteration=async(category)=>{
    let data =await DataFetching();

    
    data = data.filter((item) => item.category === category);
    

    return data;
}
export default DataFilteration;