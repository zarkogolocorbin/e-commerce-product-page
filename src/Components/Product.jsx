import ProductGallery from "./ProductGallery";
import ProductDetail from "./ProductDetail";

function Product() {
  return (
    <main className="max-w-[1440px] mx-auto md:px-[calc(10vw+10px)] mb-20 md:mb-36 xl:px-[212px]">
      <section className="flex flex-col lg:flex-row md:items-center lg:justify-between md:mt-[90px]">
        <ProductGallery />
        <ProductDetail />
      </section>
    </main>
  );
}

export default Product;
