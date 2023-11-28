import { ShoppingCartOutlined, SearchOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-2 mx-2">

            <div className="flex items-center gap-6">
                <p className='text-sm cursor-pointer'>EN</p>
                <div className="inputContainer border border-[#d3d3d3] p-1">
                    <input className="text-black outline-none" type="text" placeholder="Search" />
                    <SearchOutlined className="text-[#808080] text-base"/>
                </div>
            </div>

            <div className="mx-auto">
                <h1 className="font-bold text-3xl mr-8">E-STORE.</h1>
            </div>

            <div className="flex items-center gap-6">
                <p className='text-sm'>REGISTER</p>
                <p className='text-sm'>SIGN IN</p>
                <IconButton className='relative' aria-label='cart'>
                <Badge className='absolute top-3 right-3' badgeContent={4} color="primary"></Badge>
                <ShoppingCartOutlined className='text-black'/>
                </IconButton>
            </div>
        </div>
    );
};

export default Navbar;
