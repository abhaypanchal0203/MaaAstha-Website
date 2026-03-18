const Volunteer = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Join Our Mission</h2>
        <p className="text-center text-gray-500 mb-6">Register to volunteer at Beghar Nivara Kendra</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input type="tel" placeholder="+91 9876543210" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">How can you help?</label>
            <textarea rows="3" placeholder="E.g., I can help teach kids, distribute food, etc." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="button" className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;