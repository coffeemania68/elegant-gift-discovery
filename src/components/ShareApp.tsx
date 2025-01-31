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
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
          Gift Finder 공유하기
        </h2>
        <p className="text-gray-600 mb-8">
          친구들과 함께 특별한 선물 찾기를 시작해보세요
        </p>
        <Button 
          onClick={handleShare}
          className="px-8 rounded-full inline-flex items-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          앱 공유하기
        </Button>
      </div>
    </div>
  );
};