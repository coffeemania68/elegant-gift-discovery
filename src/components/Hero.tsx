import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentSeason, setCurrentSeason] = useState("spring");

  useEffect(() => {
    const getSeasonByMonth = () => {
      const month = new Date().getMonth() + 1;
      if (month >= 3 && month <= 5) return "spring";
      if (month >= 6 && month <= 8) return "summer";
      if (month >= 9 && month <= 11) return "fall";
      return "winter";
    };
    setCurrentSeason(getSeasonByMonth());
  }, []);

  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-[600px] object-cover"
        src={`/videos/${currentSeason}.mp4`}
      />
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 py-24 text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            선물 추천
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            AI가 추천하는 특별한 선물로 소중한 마음을 전하세요
          </p>
        </div>
      </div>
    </div>
  );
};