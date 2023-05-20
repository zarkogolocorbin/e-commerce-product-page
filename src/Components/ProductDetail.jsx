import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

function ProductDetail() {
  const [amount, setAmount] = useState(1);

  const { addToCartHandle } = useContext(Context);

  function handleClick() {
    addToCartHandle({
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 150,
      amount: amount,
      img: "/assets/image-product-1-thumbnail.jpg",
    });
    setAmount(1);
  }

  const increaseCountHandle = () => {
    if (amount === 10) {
      setAmount(10);
    } else {
      setAmount((prev) => {
        return prev + 1;
      });
    }
  };
  const decreaseCountHandle = () => {
    if (amount === 1) {
      setAmount(1);
    } else {
      setAmount((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <div className="px-6 pt-6 basis-[445px]">
      <p className="text-[#FF7E1B] text-sm uppercase font-bold">
        Sneaker Company
      </p>
      <h1 className="text-3xl leading-none font-bold mt-6 mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[#69707D] text-[15px] font-kumbhSans">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between mt-7 md:flex-col md:gap-1">
        <div className="flex items-center gap-4">
          <span className="text-[28px] font-bold leading-[34px]">$125.00</span>
          <span className="text-base font-bold w-[50px] h-[27px] flex items-center justify-center bg-[#FFEEE2] text-[#FF7E1B] rounded-md">
            50%
          </span>
        </div>
        <span className="text-[#B6BCC8] text-base font-bold line-through">
          $250.00
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-6 md:flex-row md:mt-8">
        <div className="flex items-center justify-between bg-[#F6F8FD] h-14 px-6 md:w-40">
          <button
            aria-label="decrease amount"
            onClick={() => {
              decreaseCountHandle();
            }}
          >
            <img src="/assets/icon-minus.svg" alt="icon minus button" />
          </button>
          <span className="bg-transparent text-center font-bold">{amount}</span>
          <button
            aria-label="increase amount"
            onClick={() => {
              increaseCountHandle();
            }}
          >
            <img
              src="/assets/icon-plus.svg"
              alt="icon plus button"
              className="icon plus button"
            />
          </button>
        </div>
        <button
          aria-label="add to cart"
          onClick={() => handleClick()}
          className="group border border-white duration-300 hover:border-[#ff7e1b] hover:bg-transparent hover:text-[#ff7e1b] rounded font-bold text-white flex items-center justify-center gap-4 w-full h-14 bg-[#ff7e1b]"
        >
          <svg
            width="22"
            height="20"
            className="fill-white duration-300 group-hover:fill-[#FF7E1B]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
