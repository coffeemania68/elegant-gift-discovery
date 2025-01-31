export const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
          Get Gift Ideas in Your Inbox
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive personalized gift recommendations and special offers
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};