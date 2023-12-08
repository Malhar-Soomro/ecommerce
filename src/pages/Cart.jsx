import { Add, Remove } from "@material-ui/icons"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Announcement from "../components/Announcement"

const Cart = () => {
  return (
    <>
        <Navbar />
        <Announcement/>
        <div className="flex flex-col p-4 mb-8">
            <h1 className="text-center text-[32px] font-light">YOUR BAG</h1>
            <div className="flex justify-between mx-4 mt-6">
                <button className="border-2 border-black p-2 text-sm font-semibold">CONTINUE SHOPPING</button>
                <div className="flex gap-4">
                    <a className="underline" href="">Shopping Bag(2)</a>
                    <a className="underline" href="">Your Wishlist (0)</a>
                </div>
                <button className="bg-black p-2 text-white text-sm font-semibold outline-none">CHECKOUT NOW</button>
            </div>
            <div className="flex mt-5 gap-36 items-center">
                <div className="flex-1">
                    <div className="flex justify-between w-full items-center border-b-[1px] border-[#eeeeee]"> 
                        <div className="flex items-center gap-4">
                            <img className="w-[200px]" src="/src/assets/cart-image-1.png" alt="" />
                            <div className="content flex flex-col gap-4">
                                <p> <span className="font-bold">Product:</span> JESSIE THUNDER SHOES</p>
                                <p> <span className="font-bold">ID:</span> 93813718293</p>
                                <span className="bg-black rounded-full w-5 h-5"></span>
                                <p> <span className="font-bold">Size:</span> 37.5</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex items-center gap-1">
                                <Add/>
                                <span className="text-2xl">2</span>
                                <Remove/>
                            </div>
                            <p className="text-3xl font-extralight">$ 30</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full items-center"> 
                        <div className="flex items-center gap-4">
                            <img className="w-[200px]" src="/src/assets/cart-image-2.png" alt="" />
                            <div className="content flex flex-col gap-4">
                                <p> <span className="font-bold">Product:</span> HAKURA T-SHIRT</p>
                                <p> <span className="font-bold">ID:</span> 93813718293</p>
                                <span className="bg-[#808080] rounded-full w-5 h-5"></span>
                                <p> <span className="font-bold">Size:</span> M</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex items-center gap-1">
                                <Add/>
                                <span className="text-2xl">1</span>
                                <Remove/>
                            </div>
                            <p className="text-3xl font-extralight">$ 20</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col min-w-[200px] w-[27%] h-[52vh] border border-gray-300 rounded-lg gap-6 p-5">
                    <h1 className="text-[32px] font-extralight">ORDER SUMMARY</h1>
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$ 80</p>
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
                        <p>$ 80</p>
                    </div>
                    <button className="bg-black p-2 text-white text-sm font-semibold outline-none">CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Footer/>
    </>

  )
}

export default Cart