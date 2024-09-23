import Banner from '@/components/banner/banner';
import ContactUs from '@/components/contact/contact';
import FeaturedBikes from '@/components/featured/featured';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { Head } from '@/components/seo';
import Testimonials from '@/components/testimonials/testimonials';
import WhyChooseUs from '@/components/whychooseus/whychooseus';

export const LandingRoute = () => {
  return (
    <>
      <Navbar />
      <Head description="Cyclone - Bike Rental Website" />
      <div className="flex h-screen items-center bg-white">
        <Banner />
      </div>
      <WhyChooseUs />
      <FeaturedBikes />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};
