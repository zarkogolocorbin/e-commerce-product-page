import { useContext } from "react";
import { Context } from "../context/Context";

function ProductGallery() {
  const {
    data,
    setIsLightboxOpen,
    currentImg,
    setCurrentImg,
    nextImg,
    prevImg,
  } = useContext(Context);

  return (
    <div className="flex-col gap-8 md:flex xl:basis-[445px]">
      <div className="relative overflow-hidden md:rounded-2xl md:h-[445px]">
        <button
          aria-label="previous image"
          className="absolute top-1/2 left-4 w-10 h-10 bg-white rounded-[40px] flex items-center justify-center md:hidden z-40"
          onClick={() => prevImg()}
        >
          <img
            src="/assets/icon-previous.svg"
            alt="icon previous button"
            className="w-[9px] h-[14px]"
          />
        </button>
        <img
          id={currentImg}
          src={data[currentImg].img}
          alt="current product gallery image"
          className="h-[300px] w-full md:h-[445px] md:cursor-pointer"
          onClick={() => {
            setIsLightboxOpen(true);
          }}
        />
        <button
          aria-label="next image"
          className="absolute top-1/2 right-4 w-10 h-10 bg-white rounded-[40px] flex items-center justify-center md:hidden z-40"
          onClick={() => nextImg()}
        >
          <img
            src="/assets/icon-next.svg"
            alt="icon next button"
            className="w-[9px] h-[14px]"
          />
        </button>
      </div>
      <div className="hidden md:flex md:gap-[31px]">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                currentImg === idx
                  ? "h-[88px] w-[88px] border-2 border-[#FF7E1B] rounded-[10px]"
                  : "h-[88px] w-[88px] border-2 border-white"
              }
            >
              <img
                id={idx}
                src={item.imgThumbnail}
                alt="image thumbnail gallery image"
                className={
                  currentImg === idx
                    ? "rounded-lg duration-300 opacity-25 hover:opacity-25 cursor-pointer"
                    : "rounded-lg duration-300 hover:opacity-25 cursor-pointer"
                }
                onClick={(e) => {
                  setCurrentImg(+e.target.id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGallery;
