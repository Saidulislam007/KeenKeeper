import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-emerald-900 text-white mt-16 px-4 py-10">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Logo / Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships <br></br> that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Social Links</h3>

          <div className="flex justify-center gap-4">
            
            <a
              href="#"
              className="bg-white text-emerald-900 p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="bg-white text-emerald-900 p-2 rounded-full hover:scale-110 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="bg-white text-emerald-900 p-2 rounded-full hover:scale-110 transition"
            >
              <FaTwitter size={18} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
    );
};

export default Footer;