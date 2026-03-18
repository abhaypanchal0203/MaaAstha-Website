const Footer = () => {
  return (
    <footer className="bg-[#5c7a5d] text-white py-12 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Maa Astha</h3>
          <p className="text-gray-200">Helping families reunite with their missing loved ones.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold mb-4 text-white">Home</h4>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/about" className="hover:text-white transition">About us</a></li>
            <li><a href="/missing" className="hover:text-white transition">Missing People</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold mb-4 text-white">More</h4>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/" className="hover:text-white transition">Projects</a></li>
            <li><a href="/" className="hover:text-white transition">Events</a></li>
            <li><a href="/donate" className="hover:text-white transition">Donate</a></li>
          </ul>
        </div>

        {/* Column 4 - Donation form */}
        <div>
          <h4 className="font-bold mb-4 text-white">Donate and make a difference!</h4>
          <div className="flex w-full">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 w-full text-black rounded-l-md outline-none border-none"
            />
            <button className="bg-white text-gray-800 px-4 py-2 rounded-r-md font-bold hover:bg-gray-100 transition">
              Donate
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;