import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="flex justify-start gap-10 sm:p-4 flex-col md:flex-row">

        <div className="flex flex-col flex-1 gap-4 sm:p-0 p-4">
            <h1 className="text-3xl font-bold">E-Store</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
            <div className="icons flex gap-4">
                <div className="bg-[#3b5999] rounded-[50%] p-2">
                    <Facebook className="text-white"/>
                </div>
                <div className="bg-[#e4405f] rounded-[50%] p-2">
                    <Instagram className="text-white"/>
                </div>
                <div className="bg-[#55acee] rounded-[50%] p-2">
                    <Twitter className="text-white"/>
                </div>
                <div className="bg-[#e60023] rounded-[50%] p-2">
                    <Pinterest className="text-white"/>
                </div>
            </div>
        </div>

        <div className="md:flex flex-col flex-1 hidden">
            <h2 className="text-lg font-bold text-left">Useful Links</h2>
            <div className="flex gap-32 mt-4">
                <ul className="flex flex-col gap-2">
                    <li>Home</li>
                    <li>Man Fashion</li>
                    <li>Accessories</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li>Cart</li>
                    <li>Woman Fashion</li>
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>

        </div>

        <div className="flex flex-col gap-6 flex-1 sm:bg-transparent bg-[#fcf5f5] p-4 sm:p-0">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <div className="flex gap-2">
                <Room/>
                <p>Sadar Karachi</p>
            </div>
            <div className="flex gap-2">
                <Phone/>
                <p>+92 349 5781542</p>
            </div>
            <div className="flex gap-2">
                <MailOutline/>  
                <p>malharsoomro2@gmail.com</p>             
            </div>
            <div className="">
                <img className=" w-40 sm:w-max" src="/src/assets/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer