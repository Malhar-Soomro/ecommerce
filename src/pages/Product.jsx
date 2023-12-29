import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../requestMethod'


const Product = () => {

     const location = useLocation();
     const productId = location.pathname.split("/")[2];

     const [product, setProduct] = useState({});
     const [quantity, setQuantity] = useState(1);
     const [color, setColor] = useState();
     const [size, setSize] = useState();

     console.log(color, size)

     useEffect(() => {

        const getProduct = async () => {
            try {
                const response = await publicRequest.get("/products/find/"+productId)
                setProduct(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();

     },[productId]);

     const handleOnClick = (type) => {
        if(type === "add"){
            setQuantity(quantity + 1);
        } else quantity > 1 && setQuantity(quantity - 1);
     }

  return (
    <>
    <Navbar />
    <Announcement/>
    <div className='flex sm:p-12 p-3 sm:gap-12 gap-3 flex-col sm:flex-row'>
        <div className='flex-1'>
            <img className='w-[100%] h-[40vh] sm:h-[90vh] object-cover' src="/assets/jean.jpg" alt="jeans pic" />
        </div>
        <div className='flex-1 flex flex-col gap-4 p-2'>
            <h2 className='text-3xl font-extralight '>{product.title}</h2>
            <p>{product.desc}</p>
            <p className="text-[40px] font-thin flex gap-2">
                <span>$</span>
                {product.price}
            </p>
            <div className='flex sm:gap-20 justify-between sm:justify-start mt-4'>
                <div className="flex gap-1 items-center">
                    <p className='text-xl font-extralight'>Color</p>
                    {product.color?.map((c) => 
                        <span 
                        key={c}
                        style={{'--color':c}} 
                        className={`bg-[--color] rounded-full w-5 h-5 cursor-pointer`}
                        onClick={() => setColor(c)}
                        >
                        </span>
                    )}
                </div>
                <div className='text-xl font-extralight flex gap-2 items-center'>
                    Size 
                    <select className='text-black text-sm font-normal border border-black p-1 cursor-pointer' name="size" onChange={(e) => setSize(e.target.value)} id="size">
                    {product.size?.map((s) => 
                        <option key={s} value={s}>{s}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className='flex sm:gap-20 justify-between sm:justify-start items-center mt-4'>
                <div className="flex items-center gap-2">
                    <Remove onClick={()=>handleOnClick("remove")}/>
                    <p className='text-xl font-semibold border border-[#008080] px-3 rounded-lg'>{quantity}</p>
                    <Add onClick={()=>handleOnClick("add")}/>

                </div>
                <button className='transition-all border-2 border-[#008080] p-3 text-sm font-medium hover:bg-gray-100'>ADD TO CART</button>
            </div>
        </div>

    </div>
    <Newsletter/>
    <Footer/>
  </>
  )
}

export default Product