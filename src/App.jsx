import { useState } from "react";

import Header from "./Components/Header";
import Product from "./Components/Product";
import MobileMenu from "./Components/MobileMenu";
import Cart from "./Components/Cart";
import LightboxGallery from "./Components/LightboxGallery";
import { Context } from "./context/Context";

const data = [
  {
    id: 1,
    img: "/assets/image-product-1.jpg",
    imgThumbnail: "/assets/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    img: "/assets/image-product-2.jpg",
    imgThumbnail: "/assets/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    img: "/assets/image-product-3.jpg",
    imgThumbnail: "/assets/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    img: "/assets/image-product-4.jpg",
    imgThumbnail: "/assets/image-product-4-thumbnail.jpg",
  },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [cart, setCart] = useState([]);

  function addToCartHandle(product) {
    if (cart.length === 0) {
      setCart([product]);
    } else {
      const newState = cart.map((obj) => {
        if (obj.id === product.id) {
          return { ...obj, amount: (cart[0].amount += product.amount) };
        }
      });

      setCart(newState);
    }
  }

  function deleteAllFromCartHandler() {
    setCart([]);
  }

  function nextImg() {
    if (currentImg === data.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg((prev) => prev + 1);
    }
  }
  function prevImg() {
    if (currentImg === 0) {
      setCurrentImg(3);
    } else {
      setCurrentImg((prev) => prev - 1);
    }
  }

  return (
    <Context.Provider
      value={{
        data,
        cart,
        isLightboxOpen,
        setIsLightboxOpen,
        currentImg,
        setCurrentImg,
        prevImg,
        nextImg,
        addToCartHandle,
        isCartOpen,
        setIsCartOpen,
        deleteAllFromCartHandler,
        isNavOpen,
        setIsNavOpen,
      }}
    >
      <Header
        setIsNavOpen={setIsNavOpen}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
      />
      <Product />
      <MobileMenu />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {isLightboxOpen && <LightboxGallery />}
    </Context.Provider>
  );
}

export default App;
