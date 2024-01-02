import { Add, Remove } from "@material-ui/icons"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Announcement from "../components/Announcement"
import { useSelector } from "react-redux"

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart)
    console.log()

  return (
    <>
        <Navbar />
        <Announcement/>
        <div className="flex flex-col p-4 mb-8">
            <h1 className="text-center text-[32px] font-light">YOUR BAG</h1>
            <div className="flex justify-between mx-0 sm:mx-4 mt-6 gap-2 sm:gap-0">
                <button className="border-2 border-black p-2 text-sm font-semibold">CONTINUE SHOPPING</button>
                <div className="flex gap-4">
                    <a className="underline hidden sm:block" href="">Shopping Bag(2)</a>
                    <a className="underline hidden sm:block" href="">Your Wishlist (0)</a>
                </div>
                <button className="bg-black p-2 text-white text-sm font-semibold outline-none">CHECKOUT NOW</button>
            </div>
            <div className="flex mt-5 gap-5 md:gap-10 lg:gap-36  items-center flex-col sm:flex-row">
                <div className="flex-1">
                    {/* {cart && <div className="text-center"> No product </div>} */}
                    {cart.products.length === 0 ? <div className="text-center"> No any product in the cart </div> : cart?.products?.map((product) => 
                    <div className="flex justify-between w-full items-center flex-col sm:flex-row"> 
                        <div className="flex items-center gap-4">
                            <img className="w-[200px]" src={product.img} alt="" />
                            <div className="content flex flex-col gap-4">
                                <p> <span className="font-bold">Product:</span> {product.title}</p>
                                <p> <span className="font-bold">ID:</span> {product._id}</p>
                                <span style={{"--product-color":product.color}} className="bg-[--product-color] rounded-full w-5 h-5"></span>
                                <p> <span className="font-bold">Size:</span> {product.size}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex items-center gap-1">
                                <Add/>
                                <span className="text-2xl">{product.quantity}</span>
                                <Remove/>
                            </div>
                            <p className="text-3xl font-extralight">$ {product.price * product.quantity}</p>
                        </div>
                    </div>
                    )}
                </div>

                <div className="flex flex-col min-w-[200px] w-[100%]  sm:w-[35%] md:w-[27%] h-[52vh] border border-gray-300 rounded-lg gap-6 p-5">
                    <h1 className="text-[32px] font-extralight">ORDER SUMMARY</h1>
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$ {cart.total}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Estimated Shipping</p>
                        <p>$ 5.90</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Shipping Discount</p>
                        <p>$ -5.90</p>
                    </div>
                    <div className="flex justify-between font-medium text-2xl">
                        <p>Total</p>
                        <p>$ {cart.total}</p>
                    </div>
                    <button className="bg-black p-2 text-white text-sm font-semibold outline-none">CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Cart