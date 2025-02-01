export const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-4 text-center">
        <h1 className="text-3xl font-bold mb-2 gradient-text">
          GIFT FINDER
        </h1>
        <p className="text-lg text-gray-700">
          AI가 추천하는 특별한 선물로 소중한 마음을 전하세요
        </p>
      </div>
      <div className="relative h-[300px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/spring.mp4"
        />
      </div>
    </div>
  );
};