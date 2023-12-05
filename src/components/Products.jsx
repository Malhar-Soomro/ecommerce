import {  FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { productsData } from "../../data"

const Products = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-5">
    {productsData.map((item => (
      <div key={item.id} className="bg-[#f5fbfd] min-w-[280px] h-[350px] flex flex-1 justify-center items-center relative">
            <div className="w-[200px] h-[200px] bg-white rounded-[50%]">
            </div>
            <div className="h-[100%] w-[100%] absolute flex justify-center items-center">
                <img className="h-[75%]"  src={item.img} alt="" />
            </div>
            <div className="absolute w-[100%] h-[100%] flex justify-center items-center gap-4 transition-all duration-500 opacity-0 hover:opacity-100 bg-[#0003]">
                <div className="bg-white rounded-[50%] p-2 cursor-pointer hover:scale-110 transition-all duration-500 hover:bg-[#e9f5f5]">
                  <ShoppingCartOutlined/>
                </div>
                <div className="bg-white rounded-[50%] p-2 cursor-pointer hover:scale-110 transition-all duration-500 hover:bg-[#e9f5f5]">
                  <SearchOutlined/>
                </div>
                <div className="bg-white rounded-[50%] p-2 cursor-pointer hover:scale-110 transition-all duration-500 hover:bg-[#e9f5f5]">
                  <FavoriteBorder/>
                </div>
            </div>
        </div>
    )))}

     
        
    </div>
  )
}

export default Products