import { useContext } from "react";
import { Context } from "../context/Context";
const LightboxGallery = () => {
  const { data, setIsLightboxOpen, currentImg, prevImg, nextImg } =
    useContext(Context);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/75 hidden md:block"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <button
          className="block text-white ml-auto mb-4"
          onClick={() => {
            setIsLightboxOpen(false);
          }}
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </button>
        <div className="relative">
          <button
            className="absolute top-1/2 -left-4 w-10 h-10 bg-white rounded-[40px] flex items-center justify-center z-40"
            onClick={() => prevImg()}
          >
            <img
              src="/assets/icon-previous.svg"
              className="w-[9px] h-[14px]"
              alt="previous button arrow"
            />
          </button>
          <img
            src={data[currentImg].img}
            alt="light box current image"
            className="block max-w-[450px] mb-8 rounded-xl"
          />
          <button
            className="absolute top-1/2 -right-4 w-10 h-10 bg-white rounded-[40px] flex items-center justify-center z-40"
            onClick={() => nextImg()}
          >
            <img
              src="/assets/icon-next.svg"
              className="w-[9px] h-[14px]"
              alt="next button arrow"
            />
          </button>
        </div>

        <div className="flex gap-8 justify-center">
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className={
                  currentImg === idx
                    ? "relative h-[88px] w-[88px] border-2 border-[#FF7E1B] rounded-[10px] overflow-hidden cursor-pointer"
                    : "relative h-[88px] w-[88px] border-2 border-transparent overflow-hidden"
                }
              >
                <img
                  src={item.imgThumbnail}
                  alt="lightbox thumbnail image"
                  key={idx}
                  className={
                    currentImg === idx
                      ? "rounded-lg duration-300 opacity-25  cursor-pointer"
                      : "rounded-lg duration-300  cursor-pointer"
                  }
                />
                <div
                  className={`h-[86px] w-[86px] bg-white/25 absolute top-0 left-0 rounded-[10px] ${
                    currentImg === idx ? "block" : "hidden"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LightboxGallery;
