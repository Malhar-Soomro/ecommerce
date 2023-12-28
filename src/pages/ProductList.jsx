import { useState } from "react"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { useLocation } from "react-router-dom"

const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
        });
    }

  return (
    <>
     <Navbar />
    <Announcement/>
    <div className="flex flex-col gap-8 p-4">
        <h1 className="text-3xl font-bold ">{cat}</h1>
        <div className="flex justify-between">
            <div className="flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <p className="text-xl font-semibold">Filter Products:</p>
                <select className="text-black text-sm font-normal border border-black p-2 cursor-pointer w-full sm:w-auto" name="color" id="color" defaultValue="color" onChange={handleFilters}>
                    <option value="color" disabled>Color</option>
                    <option value="gray">Gray</option>
                    <option value="pink">Pink</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <select className='text-black text-sm font-normal border border-black p-2 cursor-pointer w-full sm:w-auto mt-3 sm:mt-0' name="size" id="size" defaultValue="size" onChange={handleFilters}>
                Color
                        <option value="size" disabled>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
                <p className="text-xl font-semibold">Sort Products</p>
                <select className="text-black text-sm font-normal border border-black p-[10px] cursor-pointer" name="price" id="color" defaultValue="newest" onChange={(e) => setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="asc">Price(asc)</option>
                    <option value="desc">Price(desc)</option>
                </select>
            </div>
        </div>
    </div>
    <Products cat={cat} filters={filters} sort={sort}/>
    <Newsletter/>
    <Footer/>
  </>
  )
}

export default ProductList