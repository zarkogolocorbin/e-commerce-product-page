import { useContext } from "react";
import { Context } from "../context/Context";

const MobileMenu = () => {
  const { isNavOpen, setIsNavOpen } = useContext(Context);

  return (
    <>
      <div
        className={
          isNavOpen
            ? "bg-black/75 fixed w-full h-screen top-0 left-0 z-40 md:hidden"
            : "hidden z-10"
        }
      ></div>

      <div
        className={
          isNavOpen
            ? "fixed top-0 left-0 w-3/4 bg-white h-screen flex flex-col gap-14   translate-x-0 px-6 py-7 z-50 md:hidden"
            : "-translate-x-full  hidden"
        }
      >
        <button
          className="w-4 h-4"
          onClick={() => setIsNavOpen(false)}
          aria-label="close modal menu"
        >
          <img src="/assets/icon-close.svg" alt="icon close button" />
        </button>
        <ul className="font-bold text-lg #1d2026 flex flex-col gap-5">
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
