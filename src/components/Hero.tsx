export const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-2 text-center">
        <h1 className="text-2xl font-bold mb-1 gradient-text">
          GIFT FINDER
        </h1>
        <p className="text-sm text-gray-700">
          AI가 추천하는 특별한 선물로 소중한 마음을 전하세요
        </p>
      </div>
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full overflow-hidden">
        <img
          src="https://blog.kakaocdn.net/dn/PU2tk/btsL5tt0lgi/6RLLxL7j5z7BLZy1WcZ38k/img.png"
          alt="Gift Finder"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager" // 빠른 로딩을 위해 추가
        />
      </div>
    </div>
  );
};
