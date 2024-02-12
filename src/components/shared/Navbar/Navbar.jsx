import Container from "../Container";
import Logo from "./Logo";
// import Logo from "./Logo";
import MenuDropdown from "./MenuDropDown";
import Search from "./Search";


const Navbar = () => {
  
    return (
       <div className=" fixed w-full bg-white shadow-sm z-10">
         <div className=" py-4 border-b-[1px]">
            <Container>
                <div className=' flex items-center justify-between'>
                    <div><Logo></Logo></div>
                    <div><Search></Search></div>
                    <div><MenuDropdown></MenuDropdown></div>
                </div>
            </Container>
        </div >
       </div>
    );
}; 

export default Navbar;