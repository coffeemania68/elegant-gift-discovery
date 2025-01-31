import { Button } from "./ui/button";

export const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
          선물 추천 뉴스레터 구독하기
        </h2>
        <p className="text-gray-600 mb-8">
          매주 새로운 선물 아이디어와 특별한 혜택을 받아보세요
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button className="px-8 rounded-full">
            구독하기
          </Button>
        </div>
      </div>
    </div>
  );
};