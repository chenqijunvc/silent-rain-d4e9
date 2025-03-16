import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* Navigation Bar */}
      <nav className="z-10 w-full bg-[#002855] text-white">
        <div className="container mx-auto flex items-center justify-between p-6">
          <div className="flex items-center">
            <span className="text-[#FFD700] text-3xl font-bold mr-2">β</span>
            <span className="text-xl font-bold">Abacus AM</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#democratizing" className="hover:text-[#FFD700] transition-colors">Democratizing Beta</a>
            <a href="#products" className="hover:text-[#FFD700] transition-colors">Products</a>
            <a href="#education" className="hover:text-[#FFD700] transition-colors">Education Hub</a>
            <a href="#about" className="hover:text-[#FFD700] transition-colors">About Us</a>
            <a href="#insights" className="hover:text-[#FFD700] transition-colors">Insights</a>
          </div>
          
          <a href="/login" className="bg-[#FFD700] text-[#002855] px-5 py-2 rounded font-semibold hover:bg-white transition-colors">
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full bg-[#002855] text-white py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Democratizing Beta: Your Portfolio, Powered by Wall Street's Best Ideas
          </h1>
          <p className="text-xl mb-8">
            Invest like the pros, without the fees or minimums.
          </p>
          <button className="bg-[#FFD700] text-[#002855] px-8 py-3 rounded-lg font-bold text-lg hover:bg-white transition-colors">
            Build Your Strategy
          </button>
          <p className="mt-10 text-[#FFD700]">Join 50,000+ investors reshaping finance</p>
        </div>
      </div>

      {/* Strategy Builder Quiz */}
      <div id="democratizing" className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Choose Your Beta Strategy
          </h2>
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center mb-10">
              <div className="flex justify-center items-center bg-[#002855] text-[#FFD700] rounded-full w-14 h-14 text-2xl font-bold mb-4 md:mb-0 md:mr-6">
                β
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Strategy Builder Quiz</h3>
                <p>Answer 3 simple questions to get your personalized investment strategy</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-lg mb-3">Risk Tolerance</h4>
                <p className="text-gray-600 mb-4">How much volatility are you comfortable with?</p>
                <div className="flex justify-end">
                  <div className="h-2 w-16 bg-[#008080] rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-lg mb-3">Time Horizon</h4>
                <p className="text-gray-600 mb-4">How long do you plan to invest your money?</p>
                <div className="flex justify-end">
                  <div className="h-2 w-16 bg-[#008080] rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-lg mb-3">Factor Preferences</h4>
                <p className="text-gray-600 mb-4">Which investment factors interest you?</p>
                <div className="flex justify-end">
                  <div className="h-2 w-16 bg-[#008080] rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-[#002855] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#003b7a] transition-colors">
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Strategies */}
      <div id="products" className="w-full bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Strategies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-[#002855] h-40 flex items-center justify-center">
                <span className="text-5xl text-[#FFD700] font-bold">M</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Momentum Beta ETF</h3>
                <p className="text-gray-600 mb-4">
                  Capture returns from stocks with positive price trends, systematically buying winners and selling losers.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Growth-Oriented</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Higher Volatility</span>
                </div>
                <a href="#" className="text-[#002855] font-bold flex items-center">
                  Explore Strategy 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-[#002855] h-40 flex items-center justify-center">
                <span className="text-5xl text-[#FFD700] font-bold">V</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Value Beta ETF</h3>
                <p className="text-gray-600 mb-4">
                  Access the proven value premium by investing in undervalued companies with strong fundamentals.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Long-Term Focus</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Contrarian</span>
                </div>
                <a href="#" className="text-[#002855] font-bold flex items-center">
                  Explore Strategy 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-[#002855] h-40 flex items-center justify-center">
                <span className="text-5xl text-[#FFD700] font-bold">Q</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Quality Beta ETF</h3>
                <p className="text-gray-600 mb-4">
                  Focus on companies with strong balance sheets, consistent earnings, and sustainable competitive advantages.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Defensive</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Lower Drawdown</span>
                </div>
                <a href="#" className="text-[#002855] font-bold flex items-center">
                  Explore Strategy 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Hub */}
      <div id="education" className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Education Hub
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Beta Academy</h3>
              <p className="mb-6">Learn the fundamentals of factor investing through our free educational resources.</p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-[#008080] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">1</div>
                  <div>
                    <h4 className="font-bold">Beta 101</h4>
                    <p className="text-sm text-gray-600">Understanding market exposure and factor premiums</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-[#008080] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">2</div>
                  <div>
                    <h4 className="font-bold">Factor Investing Explained</h4>
                    <p className="text-sm text-gray-600">How to capture proven market anomalies</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-[#008080] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">3</div>
                  <div>
                    <h4 className="font-bold">Portfolio Construction</h4>
                    <p className="text-sm text-gray-600">Building a balanced factor portfolio</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Strategy Simulator</h3>
              <p className="mb-6">Test different factor combinations against historical market scenarios.</p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center mb-4">
                  <span className="text-gray-400">[Interactive Chart Placeholder]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">2008 Crisis</span>
                  <span className="text-sm text-gray-600">2020 Pandemic</span>
                  <span className="text-sm text-gray-600">2022 Inflation</span>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-[#002855] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#003b7a] transition-colors">
                  Try Simulator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#002855] text-white py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Democratize Your Portfolio?</h2>
          <p className="mb-8 text-lg">
            Start with just $500 and access the same strategies used by the world's most sophisticated investors.
          </p>
          <button className="bg-[#FFD700] text-[#002855] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors">
            Become a Beta Pioneer
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#003b7a] text-white py-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-[#FFD700] text-2xl font-bold mr-2">β</span>
                <span className="text-xl font-bold">Abacus AM</span>
              </div>
              <p className="text-gray-300 mb-4">
                Democratizing Beta – Institutional Strategies for All.
              </p>
              <p className="text-sm text-gray-400">
                SEC Registered Investment Advisor
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Core ETFs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Custom SMAs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Community Strategies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white
