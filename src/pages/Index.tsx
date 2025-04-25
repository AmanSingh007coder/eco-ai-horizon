const Index = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      {/* Hero Section */}
      <section className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-transparent bg-clip-text">
                Sustainable AI
              </span>
              <br />
              for a Better Future
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Join us in reducing the carbon footprint of AI usage while maintaining powerful capabilities. Every prompt matters in creating a sustainable future.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] opacity-75 blur"></div>
              <div className="relative bg-[#221F26] rounded-lg p-4">
                <img
                  src="/placeholder.svg"
                  alt="Sustainable AI Visualization"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="about">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FFE29F] to-[#FF719A] text-transparent bg-clip-text">
              About Our Mission
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing AI usage by implementing sustainable practices
            that reduce carbon footprint without compromising on performance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-lg bg-[#2A2731] hover:bg-[#2F2B37] transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-[#0EA5E9]">Eco-Friendly AI</h3>
            <p className="text-gray-300">Optimized algorithms that minimize energy consumption while maintaining powerful capabilities.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#2A2731] hover:bg-[#2F2B37] transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-[#F97316]">Smart Solutions</h3>
            <p className="text-gray-300">Intelligent prompt processing that reduces computational overhead and energy usage.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#2A2731] hover:bg-[#2F2B37] transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-[#D946EF]">Real Impact</h3>
            <p className="text-gray-300">Measurable reduction in carbon emissions with each AI interaction.</p>
          </div>
        </div>
      </section>

      {/* User Feedback Section */}
      <section className="py-20 px-4 bg-[#2A2731]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#0EA5E9] to-[#D946EF] text-transparent bg-clip-text">
              What Our Users Say
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-lg bg-[#221F26] hover:scale-105 transition-all duration-300">
                <p className="text-gray-300 mb-4">"EcoAI has transformed how we think about AI usage. The results are just as good, but we feel better knowing we're making a difference."</p>
                <p className="text-[#8B5CF6] font-semibold">- User {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-[#F97316] to-[#8B5CF6] text-transparent bg-clip-text">
            Our Vision
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0EA5E9]">Building a Sustainable Future</h3>
            <p className="text-gray-300">Our vision is to create a world where AI technology and environmental responsibility go hand in hand. We believe in harnessing the power of artificial intelligence while actively reducing its environmental impact.</p>
            <h3 className="text-2xl font-semibold text-[#F97316]">Innovation with Purpose</h3>
            <p className="text-gray-300">Through continuous innovation and optimization, we're setting new standards for eco-friendly AI operations.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] opacity-75 blur"></div>
            <div className="relative bg-[#221F26] rounded-lg p-4">
              <img
                src="/placeholder.svg"
                alt="Vision Illustration"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Try Now Button Section */}
      <section className="py-20 px-4 text-center">
        <button className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] hover:opacity-90 transition-opacity animate-pulse">
          Try Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#2A2731] py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">EcoAI</h3>
            <p className="text-gray-300">Making AI sustainable, one prompt at a time.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#0EA5E9]">Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F97316]">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D946EF]">Social</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
