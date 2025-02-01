import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

export const ShareApp = () => {
  // 현재 페이지의 URL을 사용
  const currentUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gift Finder',
          text: '맞춤형 선물 추천 서비스',
          url: currentUrl,  // 현재 페이지 URL 사용
        });
      } catch (error) {
        // 공유 실패시 URL 복사
        navigator.clipboard.writeText(currentUrl);
        alert('URL이 복사되었습니다!');
      }
    } else {
      // 공유 API를 지원하지 않는 경우 URL 복사
      navigator.clipboard.writeText(currentUrl);
      alert('URL이 복사되었습니다!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-6 text-center max-w-3xl mx-auto shadow-sm">
        <h2 className="text-2xl font-bold mb-3 gradient-text">
          Gift Finder 공유하기
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          친구들과 함께 특별한 선물 찾기를 시작해보세요
        </p>
        <Button 
          onClick={handleShare}
          className="px-6 py-3 rounded-full inline-flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          앱 공유하기
        </Button>
      </div>
    </div>
  );
};
