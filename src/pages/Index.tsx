
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
    </div>
  );
};

export default Index;
