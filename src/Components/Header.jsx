import { useContext } from "react";
import { Context } from "../context/Context";

function Header() {
  const { setIsNavOpen, setIsCartOpen, isCartOpen, cart } = useContext(Context);
  return (
    <header className="max-w-[1110px] mx-auto flex gap-4 items-center pt-7 pb-8 px-6 md:border-b-2 md:border-stone-300 md:gap-14">
      <button
        aria-label="set navbar open"
        className="md:hidden"
        onClick={() => {
          setIsNavOpen(true);
        }}
      >
        <img src="/assets/icon-menu.svg" alt="icon menu button" />
      </button>
      <div>
        <img src="/assets/logo.svg" alt="icon logo" />
      </div>
      <nav className="hidden md:flex gap-8">
        <a href="" className="relative group">
          Collections
          <span className="block absolute top-[68px] w-0 h-1 duration-300 bg-[#FF7E1B] group-hover:w-[77.31px]"></span>
        </a>
        <a href="" className="block group relative">
          Men
          <span className="block absolute top-[68px] w-0 h-1 duration-300 bg-[#FF7E1B] group-hover:w-[31.8px]"></span>
        </a>
        <a href="" className="block group relative">
          Women
          <span className="block absolute top-[68px] w-0 h-1 duration-300 bg-[#FF7E1B] group-hover:w-[54.91px]"></span>
        </a>
        <a href="" className="block group relative">
          About
          <span className="block absolute top-[68px] w-0 h-1 duration-300 bg-[#FF7E1B] group-hover:w-[43.58px]"></span>
        </a>
        <a href="" className="block group relative">
          Contact
          <span className="block absolute top-[68px] w-0 h-1 duration-300 bg-[#FF7E1B] group-hover:w-[54.72px]"></span>
        </a>
      </nav>
      <div className="ml-auto flex gap-6 items-center">
        <button
          aria-label="cart open"
          className=" duration-300 w-6 h-5 relative"
          onClick={() => {
            setIsCartOpen(!isCartOpen);
          }}
        >
          <img
            src="/assets/icon-cart.svg"
            alt="icon cart button"
            className="opacity-60 hover:opacity-100"
          />
          {cart.length > 0 && (
            <span className="flex items-center justify-center text-white rounded-md text-[10px] font-bold absolute -top-2 left-2 w-5 h-4 bg-[#FF7E1B]">
              {cart[0].amount}
            </span>
          )}
        </button>
        <img
          src="/assets/image-avatar.png"
          alt="image avatar"
          className="border-2 border-white rounded-3xl w-6 h-6 duration-300 hover:border-[#FF7E1B] md:w-14 md:h-14 md:rounded-[56px]"
        />
      </div>
    </header>
  );
}

export default Header;
