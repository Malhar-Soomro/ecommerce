import {  FavoriteBorder, PrintDisabled, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Product = ({item}) => {
  return (
    <div className="bg-[#f5fbfd] min-w-[280px] h-[350px] flex flex-1 justify-center items-center relative">
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
                  <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                  </Link>
                </div>
                <div className="bg-white rounded-[50%] p-2 cursor-pointer hover:scale-110 transition-all duration-500 hover:bg-[#e9f5f5]">
                  <FavoriteBorder/>
                </div>
            </div>
        </div>
  )
}

const Products = ({cat, filters, sort}) => {

  const [products , setProducts] = useState([]);
  const [filteredProducts , setFilteredProducts] = useState([]);

  useEffect(() => {

    const getProducts = async() => {
      try {
        const response = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products" );
        setProducts(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();

  },[cat]);

  useEffect(() => {
    cat &&
   setFilteredProducts(products.filter((product) => {
    if(Object.keys(filters).length === 0) return products;
    else if(filters.color === undefined){
      return product.size.includes(filters.size);
    }
    else if(filters.size === undefined){
      return product.color.includes(filters.color);
    }
    else return product.color.includes(filters.color) && product.size.includes((filters.size));
    }));
  },[filters, cat, products]);

  useEffect(() => {
    if(sort === "newest")
    setFilteredProducts((prev) => 
    [...prev].sort((a,b) =>  a.createdAt - b.createdAt));
    else if(sort === "asc")
    setFilteredProducts((prev) => 
    [...prev].sort((a,b) =>  a.price - b.price));
    else 
    setFilteredProducts((prev) => 
    [...prev].sort((a,b) =>  b.price - a.price));
  },[sort])

  
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-5">
    {cat ? filteredProducts.map((item => (
      <Product key={item._id} item={item}/>
    ))) : products.map((item => (
      <Product key={item._id} item={item}/>
    ))) 
    }        
    </div>
  )
}

export default Products