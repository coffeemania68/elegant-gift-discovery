import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

export const ShareApp = () => {
  const githubUrl = "https://github.com/your-username/gift-finder";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gift Finder',
          text: '맞춤형 선물 추천 서비스',
          url: window.location.href,
        });
      } catch (error) {
        window.open(githubUrl, '_blank');
      }
    } else {
      window.open(githubUrl, '_blank');
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
