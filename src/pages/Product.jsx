import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'

const Product = () => {
  return (
    <>
    <Navbar />
    <Announcement/>
    <div className='flex p-12 gap-12'>
        <div className='flex-1'>
            <img className='w-[100%] h-[90vh] object-cover' src="/src/assets/jean.jpg" alt="jeans pic" />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
            <h2 className='text-3xl font-extralight '>Denim Jumpsuit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.</p>
            <p className="text-[40px] font-thin flex gap-2">
                <span>$</span>
                20
            </p>
            <div className='flex gap-24 mt-4'>
                <div className="flex gap-1 items-center">
                    <p className='text-xl font-extralight'>Color</p>
                    <span className='bg-black rounded-full w-5 h-5 cursor-pointer'></span>
                    <span className='bg-[#00008b] rounded-full w-5 h-5 cursor-pointer ml-1'></span>
                    <span className='bg-[#808080] rounded-full w-5 h-5 cursor-pointer ml-1'></span>
                </div>
                <div className='text-xl font-extralight flex gap-2 items-center'>
                    Size 
                    <select className='text-black text-sm font-normal border border-black p-1 cursor-pointer' name="" id="">
                        <option value="1">XS</option>
                        <option value="2">S</option>
                        <option value="3">M</option>
                        <option value="4">L</option>
                        <option value="5">XL</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-28 items-center mt-4'>
                <div className="flex items-center gap-2">
                    {/* <p className='text-2xl font-extralight'> - </p> */}
                    <Remove/>
                    <p className='text-xl font-semibold border border-[#008080] px-3 rounded-lg'>1</p>
                    <Add/>
                    {/* <p className='text-3xl font-medium'>+</p> */}

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