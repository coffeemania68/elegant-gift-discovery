const steps = [
  {
    number: "01",
    title: "선물 정보 입력",
    description: "받는 분과 상황에 대해 알려주세요",
  },
  {
    number: "02",
    title: "맞춤 추천 받기",
    description: "AI가 분석하여 최적의 선물을 추천해드려요",
  },
  {
    number: "03",
    title: "선물 구매하기",
    description: "마음에 드는 선물을 안전하게 구매하세요",
  },
];

export const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white/50 rounded-3xl my-16">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        이용 방법
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