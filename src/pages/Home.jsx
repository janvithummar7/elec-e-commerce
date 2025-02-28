import BannerCarousel from "../components/BannerCarousel";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSales from "../components/BestSales";
import PromoBanner from "../components/PromoBanner"
import OurProducts from "../components/OurProducts";
import NewArrivalSection from "../components/NewArrivalSection";
import Service from "../components/Service";


const Home = () => {
  return (
    <div className="flex flex-col px-20 py-2 p-5 space-y-10">

      <div className="mt-15">
        <BannerCarousel />
      </div>

      <div className="mt-15">
        <FlashSales />
      </div>

      <div className="mt-10">
        <Categories />
      </div>

      <div className="mt-10">
        <BestSales />
      </div>

      <div className="mt-10">
        <PromoBanner />
      </div>

      <div className="mt-10">
        <OurProducts />
      </div>

      <div className="mt-10">
        <NewArrivalSection />
      </div>

      <div className="mt-10">
        <Service />
      </div>
    </div>
  );
};

export default Home;
