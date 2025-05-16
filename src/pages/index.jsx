import UpcomingExams from "./components/UpcomingExams";
import Navigation from "./components/Navigation";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import CardCarousel from "./components/CardSlider";
import ImageCarousel from "./components/ImageCarousel";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <main>
        <ImageCarousel />
        <UpcomingExams />
        <CardCarousel />
        <StatsSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};
export default MainPage;
