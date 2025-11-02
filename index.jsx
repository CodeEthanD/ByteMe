import React from 'react';

const ByteMeHomepage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-[#1A4DB3]">ByteMe</h1>
            <div className="flex space-x-6">
              <button className="text-[#1A4DB3] text-xl font-semibold hover:text-blue-700 transition-colors px-4 py-2 rounded-lg">
                Login
              </button>
              <button className="bg-[#1A4DB3] text-white text-xl font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:shadow-blue-200">
                AI Advisor
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#E8F1FF] py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Empowering Every Generation with Smarter Digital Finance
              </h1>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                Simple. Secure. Personalized. Experience finance made easy for everyone.
              </p>
              <button className="bg-[#1A4DB3] text-white text-2xl font-semibold px-10 py-5 rounded-2xl hover:shadow-2xl transition-all hover:shadow-blue-300">
                Get Started Securely
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-[#E8F1FF] rounded-3xl p-8 shadow-lg max-w-md">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="w-64 h-96 bg-gradient-to-b from-[#1A4DB3] to-blue-400 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-xl">Friendly Banking Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">AI Finance Advisor</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get personalized financial insights and friendly guidance anytime.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="text-6xl mb-6">💸</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Smart Payment Simulator</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn to transfer money safely without real transactions.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="text-6xl mb-6">🛡️</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Fraud & Scam Checker</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Check messages or links for scam risks instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Preview Section */}
      <section className="py-20 bg-[#E8F1FF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Your Personal Finance Insights — Made Simple
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Insight 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Track your spending easily</h3>
                <p className="text-xl text-gray-600">See where your money goes with simple visual charts</p>
              </div>
            </div>

            {/* Insight 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Get daily saving tips</h3>
                <p className="text-xl text-gray-600">Personalized advice to help you save more every day</p>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6">
              <div className="text-4xl">❤️</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Understand your financial health</h3>
                <p className="text-xl text-gray-600">Plain-language summaries that everyone can understand</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#1A4DB3] text-white text-2xl font-semibold px-12 py-4 rounded-2xl hover:shadow-xl transition-all hover:shadow-blue-300">
              Try the Demo
            </button>
          </div>
        </div>
      </section>

      {/* Community & Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Trusted by Users Across India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                "ByteMe helped me understand UPI safely."
              </p>
              <p className="text-xl font-semibold text-[#1A4DB3]">— Ramesh, 65</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                "Feels like talking to a real advisor!"
              </p>
              <p className="text-xl font-semibold text-[#1A4DB3]">— Anjali, 42</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                "Finally, an app my parents can use easily."
              </p>
              <p className="text-xl font-semibold text-[#1A4DB3]">— Vivek, 28</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl text-gray-600 mb-6">
            © 2025 ByteMe | Empowering Digital Trust for Everyone
          </p>
          <div className="flex justify-center space-x-6">
            <button className="text-3xl text-gray-400 hover:text-[#1A4DB3] transition-colors">📘</button>
            <button className="text-3xl text-gray-400 hover:text-[#1A4DB3] transition-colors">💼</button>
            <button className="text-3xl text-gray-400 hover:text-[#1A4DB3] transition-colors">📺</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ByteMeHomepage;