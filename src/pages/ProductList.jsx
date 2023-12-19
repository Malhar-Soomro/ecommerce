import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { productsData } from "../../data"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const ProductList = () => {
  return (
    <>
     <Navbar />
    <Announcement/>
    <div className="flex flex-col gap-8 p-4">
        <h1 className="text-3xl font-bold ">Dresses</h1>
        <div className="flex justify-between">
            <div className="flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <p className="text-xl font-semibold">Filter Products:</p>
                <select className="text-black text-sm font-normal border border-black p-2 cursor-pointer w-full sm:w-auto" name="color" id="color" defaultValue="color">
                <option value="color" disabled>Color</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <select className='text-black text-sm font-normal border border-black p-2 cursor-pointer w-full sm:w-auto mt-3 sm:mt-0' name="color" id="size" defaultValue="size">
                Color
                        <option value="size" disabled>Size</option>
                        <option value="1">XS</option>
                        <option value="2">S</option>
                        <option value="3">M</option>
                        <option value="4">L</option>
                        <option value="5">XL</option>
                    </select>
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
                <p className="text-xl font-semibold">Sort Products</p>
                <select className="text-black text-sm font-normal border border-black p-[10px] cursor-pointer" name="color" id="color" defaultValue="newest">
                    <option value="newest">Newest</option>
                    <option value="price_asc">Price(asc)</option>
                    <option value="price_desc">Price(desc)</option>
                </select>
            </div>
        </div>
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
    </div>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default ProductList