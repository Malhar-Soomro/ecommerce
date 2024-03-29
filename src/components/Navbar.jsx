import { ShoppingCartOutlined, SearchOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);
    return (
        <div className="flex justify-between items-center sm:p-2 sm:mx-2 p-1 px-4">

            <div className="flex items-center gap-6">
                <p className='md:block text-sm cursor-pointer hidden'>EN</p>
                <div className="inputContainer border border-[#d3d3d3] p-1 flex items-center justify-between">
                    <input className="text-black outline-none w-14 md:w-[100%]" type="text" placeholder="Search" />
                    <SearchOutlined className="text-[#808080] text-lg"/>
                </div>
            </div>

            <div className="mx-auto">
            <Link to="/">
                <h1 className="font-bold text-lg md:mr-8 md:text-3xl mx-1">E-STORE.</h1>
            </Link>
            </div>

            <div className="flex items-center gap-1 md:gap-6 ">
                <p className='md:text-sm text-xs'>REGISTER</p>
                <p className='md:text-sm text-xs'>SIGN IN</p>
                <Link to="/cart">
                    <IconButton className='relative' aria-label='cart'>
                    <Badge overlap='rectangular' 
                    className='absolute top-3 right-3' 
                    badgeContent={quantity} 
                    color="primary"></Badge>
                    <ShoppingCartOutlined className='text-black'/>
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
