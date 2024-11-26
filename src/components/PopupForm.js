function PopupForm({ isOpen, closePopup }) {
  if (!isOpen) return null;

  return (
    <div className="relative">

      {isOpen && (
        <>
          <div onClick={closePopup} className="fixed inset-0 bg-black opacity-50 z-10"></div>

          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <div onClick={closePopup} className="absolute top-4 right-4 cursor-pointer">
                <svg className="hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Application Form</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Enter Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="w-full mt-2 px-4 py-3 rounded-md border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Enter Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className="w-full mt-2 px-4 py-3 rounded-md border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">Enter Mobile Number *</label>
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                    className="w-full mt-2 px-4 py-3 rounded-md border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div className="mb-6 flex gap-4">
                  <select className="w-1/2 border-2 border-gray-300 rounded-md px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors">
                    <option>Select State</option>
                  </select>
                  <select className="w-1/2 border-2 border-gray-300 rounded-md px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors">
                    <option>Select City</option>
                  </select>
                </div>
                <div className="mb-6">
                  <select className="w-full border-2 border-gray-300 rounded-md px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors">
                    <option>Select Course</option>
                  </select>
                </div>
                <div className="mb-6 flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm text-gray-600">
                    I agree to receive information by signing up on Greater Noida Institute of Technology (GNIOT), Greater Noida
                  </label>
                </div>
                <div className="mt-4">
                  <button type="submit" className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PopupForm;
