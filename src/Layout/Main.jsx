import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className=" min-h-[calc(100vh-68px)]">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;