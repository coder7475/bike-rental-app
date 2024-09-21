import Banner from '@/components/banner/banner';
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
      <Footer />
    </>
  );
};
