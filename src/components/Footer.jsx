import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-14 pb-6">

      <div className="max-w-6xl  mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold text-yellow-400">
              Village Dairy
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Pure dairy products made with care using traditional methods. 
              Bringing natural taste and healthy nourishment to every home.
            </p>
          </div>

          {/* LINKS */}
          <div className="text-center md:text-start">
            <h3 className="text-yellow-300 font-medium mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              <li className="hover:text-green-300 w-fit cursor-pointer transition">Home</li>
              <li className="hover:text-green-300 w-fit cursor-pointer transition">Products</li>
              <li className="hover:text-green-300 w-fit cursor-pointer transition">About Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-start">
            <h3 className="text-yellow-300 font-medium mb-4">Contact</h3>

            <p className="text-sm text-gray-400">
              Available for orders via WhatsApp
            </p>

            <a
              href="https://wa.me/923XXXXXXXXX"
              target="_blank"
              className="inline-flex items-center gap-2 mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              <FaInstagram className="text-lg hover:text-white cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Village Dairy. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;