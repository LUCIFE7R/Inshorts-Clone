import {data} from "./constants/data.js"
import news from "./model/news.js";
const DefaultData=async()=>{
    try{
    await news.insertMany(data);
    
    console.log("Data imported Succssfully");
    }catch(error){
        console.log("Error in DefaultJS",error.message);
    }
}
export default DefaultData;