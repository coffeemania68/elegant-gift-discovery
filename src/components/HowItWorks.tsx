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
  const scrollToGiftFilter = () => {
    const giftFilterSection = document.querySelector('#gift-filter');
    giftFilterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white/50 rounded-3xl my-8">
      <h2 className="text-2xl font-bold text-center mb-8 gradient-text">
        이용 방법
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={scrollToGiftFilter}
            className="text-center animate-fade-up bg-gradient-to-br from-[#FFDEE2] to-[#FEC6A1] p-4 rounded-2xl cursor-pointer hover:shadow-lg transition-all"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl font-bold text-[#8B5CF6]/20 mb-2">{step.number}</div>
            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};