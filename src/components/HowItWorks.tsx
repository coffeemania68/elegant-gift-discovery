const steps = [
  {
    number: "01",
    title: "Answer Questions",
    description: "Tell us about the recipient and occasion",
  },
  {
    number: "02",
    title: "Get Recommendations",
    description: "Receive personalized gift suggestions",
  },
  {
    number: "03",
    title: "Choose & Purchase",
    description: "Select the perfect gift and buy securely",
  },
];

export const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white/50 rounded-3xl my-16">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};