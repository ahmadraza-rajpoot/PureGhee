import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-50 to-yellow-50">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-emerald-900 leading-snug">
          Bring Pure Goodness to Your Home <span className="text-yellow-400">Today</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience the richness of traditional dairy made with care. Order easily through WhatsApp and enjoy pure taste delivered to your doorstep.
        </p>

        {/* Button */}
        <a
          href="https://wa.me/923242108192"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition shadow-md hover:shadow-lg"
        >
          <FaWhatsapp className="text-lg" />
          Order Now on WhatsApp
        </a>

      </div>

    </section>
  );
};

export default CTASection;