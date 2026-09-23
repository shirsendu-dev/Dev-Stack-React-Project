import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200">

      <div className="container mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:px-0">

        <div className="md:col-span-6 flex flex-col items-center text-center md:items-start md:text-left gap-6 md:px-0">
          <img src={logo} alt="Dev Stack" className="w-[130px] md:w-auto" />

          <p className="max-w-[520px] text-[16px] leading-[1.8] text-[#64748b]">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 text-[16px] md:text-[14px]">
            <a href="#" className="hover:text-[#db2777]">GitHub</a>
            <span className="md:hidden">•</span>
            <a href="#" className="hover:text-[#db2777]">Twitter</a>
            <span className="md:hidden">•</span>
            <a href="#" className="hover:text-[#db2777]">LinkedIn</a>
          </div>
        </div>

        <div className="hidden md:block md:col-span-2">
          <h3 className="uppercase font-semibold mb-5">Product</h3>
          <p className="text-[#64748b] mb-2">Home</p>
          <p className="text-[#64748b] mb-2">Technologies</p>
          <p className="text-[#64748b]">Projects</p>
        </div>

        <div className="hidden md:block md:col-span-2">
          <h3 className="uppercase font-semibold mb-5">Company</h3>
          <p className="text-[#64748b] mb-2">About</p>
          <p className="text-[#64748b] mb-2">Contact</p>
          <p className="text-[#64748b]">Careers</p>
        </div>

        <div className="hidden md:block md:col-span-2">
          <h3 className="uppercase font-semibold mb-5">Legal</h3>
          <p className="text-[#64748b] mb-2">Privacy Policy</p>
          <p className="text-[#64748b]">Terms of Service</p>
        </div>

      </div>

      <div className="container mx-auto">
    <div className="border-t border-gray-200 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <p className="text-xs sm:text-sm text-[#64748b] text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex items-center justify-center sm:justify-end gap-6">
            <a href="#" className="text-xs sm:text-sm text-[#64748b] hover:text-[#db2777]">
                Privacy
            </a>

            <a href="#" className="text-xs sm:text-sm text-[#64748b] hover:text-[#db2777]">
                Terms
            </a>
        </div>

    </div>
</div>

    </footer>
  );
};

export default Footer;