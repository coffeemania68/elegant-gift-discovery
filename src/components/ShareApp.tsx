import { Button } from "./ui/button";
import { Share2 } from "lucide-react";
import { Card } from "./ui/card";

export const ShareApp = () => {
  // 현재 페이지의 URL을 사용
  const currentUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gift Finder',
          text: '맞춤형 선물 추천 서비스',
          url: currentUrl,
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
      <Card className="bg-white rounded-3xl p-6 text-center max-w-3xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3">
            <img 
              src="https://blog.kakaocdn.net/dn/PU2tk/btsL5tt0lgi/6RLLxL7j5z7BLZy1WcZ38k/img.png"
              alt="Gift Finder"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold gradient-text">
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
      </Card>
    </div>
  );
};