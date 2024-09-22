import Banner from '@/components/banner/banner';
import FeaturedBikes from '@/components/featured/featured';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { Head } from '@/components/seo';

export const LandingRoute = () => {
  return (
    <>
      <Navbar />
      <Head description="Cyclone - Bike Rental Website" />
      <div className="flex h-screen items-center bg-white">
        <Banner />
      </div>
      <FeaturedBikes />
      <Footer />
    </>
  );
};
