import React from "react";

const Donation = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ngo-dark mb-4">
            Support Our Mission
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aapka ek chhota sa yogdaan kisi beghar ko aashray, khana aur ek nayi zindagi de sakta hai.
          </p>
        </div>

        {/* Donation Details Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Bank Details */}
          <div className="md:w-1/2 p-8 md:p-12 bg-ngo-dark text-white">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <span className="mr-3">🏦</span> Bank Transfer
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-ngo-light mb-1 uppercase tracking-wider">Account Name</p>
                <p className="text-xl font-semibold">Maa Astha Shelter Project</p>
              </div>
              
              <div>
                <p className="text-sm text-ngo-light mb-1 uppercase tracking-wider">Account Number</p>
                <p className="text-xl font-mono tracking-widest">1234 5678 9012</p>
              </div>
              
              <div className="flex gap-8">
                <div>
                  <p className="text-sm text-ngo-light mb-1 uppercase tracking-wider">IFSC Code</p>
                  <p className="text-lg font-mono">SBIN000XXXX</p>
                </div>
                <div>
                  <p className="text-sm text-ngo-light mb-1 uppercase tracking-wider">Bank Name</p>
                  <p className="text-lg">State Bank of India</p>
                </div>
              </div>
            </div>

            {/* Tax Exemption Note */}
            <div className="mt-10 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="text-sm">
                <span className="font-bold text-yellow-400">Note:</span> All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>

          {/* Right Side - UPI & QR Code */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-white">
            <h2 className="text-2xl font-heading font-bold text-ngo-dark mb-6 flex items-center">
              <span className="mr-3">📱</span> Scan to Donate
            </h2>
            
            {/* QR Code Placeholder (Baad mein real QR ki image se replace kar dena) */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-inner mb-6 border-2 border-dashed border-gray-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                alt="Donation QR Code" 
                className="w-48 h-48 opacity-80"
              />
            </div>
            
            <div className="text-center w-full">
              <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Or use UPI ID</p>
              <div className="bg-gray-50 py-3 px-4 rounded-lg border border-gray-200 text-lg font-mono font-semibold text-ngo-dark inline-block w-full">
                maaastha@upi
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-8 text-center">
              GPay, PhonePe, Paytm ya kisi bhi UPI app se scan karein.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donation;