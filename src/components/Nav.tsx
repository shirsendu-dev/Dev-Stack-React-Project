import logo from "../assets/logo-text.png"
import mobileMenu from "../assets/mobile-menu.png"

const Nav = () => {
    return (
        <>
            <nav className=" hidden md:flex sm:flex py-4 border-b border-gray-200 sticky top-0 ">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img src={logo} alt="Logo-Image" />
                    </div>

                    <ul className="
                    flex items-center gap-8 justify-center
                    [&_a]:text-[#475569FF]
                    [&_a:hover]:text-[#db2777FF]
                    ">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#tech">Technologies</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="flex gap-3 items-center justify-center">
                        <button className="text-[#475569FF] hover:text-[#db2777FF] cursor-pointer">Sign In</button>
                        <button className="bg-[#d91b7eFF] text-white rounded-3xl py-2 px-4 cursor-pointer text-shadow-2xs hover:bg-[#953DDB] transition-colors duration-300">Sign Up</button>
                    </div>
                </div>
            </nav>

            {/* Mobile nav */}

            <nav className=" flex md:hidden py-4  sticky top-0 ">
                <div className="w-[92%] mx-auto flex justify-between items-center border border-gray-100 py-1 px-2">
                    <div>
                        <img src={mobileMenu} alt="Logo-Image" />
                    </div>

                    <div className="">
                        <img width="120px" height='auto' src={logo} alt="Logo-Image" />
                    </div>

                    
                    <div className="flex gap-2 items-center justify-center text-xs">
                        <button className="text-[#475569FF] hover:text-[#db2777FF] cursor-pointer">Sign In</button>
                        <button className="bg-[#d91b7eFF] text-white rounded-3xl py-1.5 px-3 cursor-pointer text-shadow-2xs hover:bg-[#953DDB] transition-colors duration-300">Sign Up</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;