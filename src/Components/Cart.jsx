import { useContext } from "react";
import { Context } from "../context/Context";

const Cart = () => {
  const { isCartOpen, cart, deleteAllFromCartHandler } = useContext(Context);
  if (cart.length === 0) {
    return (
      <div
        className={`absolute top-24 right-1/2 translate-x-1/2 bg-white duration-300 w-[360px] h-[256px] rounded-xl drop-shadow-2xl z-40 md:top-24 md:right-20 md:translate-x-0 ${
          isCartOpen ? "block" : "hidden"
        }`}
      >
        <h3 className="font-bold p-6 border-b-2 border-inherit">Cart</h3>
        <div className="flex items-center justify-center h-[188px]">
          <span className="text-[#69707D] font-bold">Your cart is empty.</span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`absolute top-24 right-1/2 translate-x-1/2 bg-white duration-300 w-[360px] h-[256px] rounded-xl drop-shadow-2xl z-40 md:top-24 md:right-20 md:translate-x-0 ${
          isCartOpen ? "block" : "hidden"
        }`}
      >
        <h3 className="font-bold p-6 border-b-2 border-inherit">Cart</h3>
        <div className="p-6">
          {cart.map((item) => {
            return (
              <div key={item.id} className="flex justify-between">
                <img
                  src={item.img}
                  alt="image product in cart"
                  className="w-14 h-14"
                />
                <div>
                  <h4 className="text-[#69707D]">{item.name}</h4>
                  <div className="flex gap-2">
                    <span className="text-[#69707d]">
                      ${item.price} x {item.amount}
                    </span>
                    <span className="font-bold">
                      $ {item.price * item.amount}.00
                    </span>
                  </div>
                </div>
                <button onClick={() => deleteAllFromCartHandler()}>
                  <img src="/assets/icon-delete.svg" alt="delete icon" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-full px-6">
          <button className="w-full h-14 border border-white bg-[#FF7E1B] text-white font-bold rounded-lg cursor-pointer duration-300 hover:border-[#ff7e1b] hover:bg-transparent hover:text-[#ff7e1b]">
            Checkout
          </button>
        </div>
      </div>
    );
  }
};

export default Cart;
