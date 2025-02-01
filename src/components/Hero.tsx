export const Hero = () => {
  return (
    <div className="relative h-[25vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/spring.mp4"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 bg-black/30">
        <h1 className="text-3xl font-bold mb-2 text-white">
          GIFT FINDER
        </h1>
        <p className="text-lg text-white">
          AI가 추천하는 특별한 선물로 소중한 마음을 전하세요
        </p>
      </div>
    </div>
  );
};