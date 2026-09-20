import logo from "../assets/logo-text.png"
const footer = () => {
    return (
        <>
            <footer className="py-10 [&_p]:text-[#475569FF] [&_p]:text-[14px] [&_p]:leading-[1.8em] border-t border-gray-200 mt-10 ">
                <div className="container mx-auto grid grid-cols-12 gap-4">

                    <div className="col-span-6 flex flex-col gap-4 items-start justify-center">
                        <img src={logo} alt="" />
                        <p className="text-[#475569FF] w-[480px]">Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <div className="flex gap-5 [&_p]:text-[black] [&_p]:text-[16px] [&_p:hover]:text-[#db2777FF] cursor-pointer">
                            <p>GitHub</p>
                            <p>Twitter</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h3 className="uppercase mb-5">Products</h3>
                        <p>Home</p>
                        <p>Technologies</p>
                        <p>Projects</p>

                    </div>
                    <div className="col-span-2">
                        <h3 className="uppercase mb-5">Company</h3>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Career</p>
                    </div>
                    <div className="col-span-2">
                        <h3 className="uppercase mb-5">Legal</h3>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        
                    </div>

                </div>
                    <div className="container mx-auto flex justify-between items-center mt-9 border border-gray-200 py-5 px-5">
                        <div>
                            <p>© 2026 Dev Stack. All rights reserved.</p>
                        </div>
                        <div className="flex gap-8 items-center">
                            <p>Privacy</p>
                            <p>Terms</p>
                        </div>
                    </div>
            </footer>
        </>
    );
};

export default footer;