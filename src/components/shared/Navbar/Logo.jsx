import { Link } from 'react-router-dom';
import logo from '../../../assets/Airbnb_Logo_Bélo.svg.png'
const Logo = () => {
    return (
        <>
           <Link className=' hidden md:block' to={'/'}> <img src={logo} alt="logo" width={"100px"} height={"100px"} /></Link>
        </>
    );
};

export default Logo;