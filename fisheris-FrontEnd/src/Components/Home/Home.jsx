import CarouselSlider from "./CarouselSlider";
import Recomend from "./Recomend";
import Swipper from "./Swipper";
import Testimonials from "./Testimonials";
import bg_img from "../../assets/cover-7.jpg";

const Home = () => {
  return (
    <div>
      {/* Carousel Slider Section */}
      <CarouselSlider />

      {/* Swipper Section */}
      <Swipper />

      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-center text-center text-white lg:text-left w-full lg:w-3/4 mx-auto py-10 lg:py-20">
          <div className="max-w-xl px-6 lg:px-8">
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold">
              Digital Aquaculture Management System
            </h1>
            <p className="mb-6 text-base lg:text-lg">
              আমরা আপনাদের জন্য নিয়ে এসেছি একটি সম্পূর্ণ ডিজিটাল অ্যাকুয়াকালচার ম্যানেজমেন্ট সিস্টেম, যা মাছ চাষ, হ্যাচারি ব্যবস্থাপনা, ফিশারিজ বিপণন এবং সম্পদ ট্র্যাকিংকে সম্পূর্ণরূপে ডিজিটালাইজড ও স্বয়ংক্রিয় করে তুলবে।

              এই সিস্টেমের মাধ্যমে মৎস্য চাষিরা তাদের উৎপাদন প্রক্রিয়াকে আরও সহজভাবে নিয়ন্ত্রণ করতে পারবেন, বাজারজাতকরণের সুবিধা পাবেন এবং লাভজনকভাবে ব্যবসা পরিচালনা করতে সক্ষম হবেন।
            </p>
            <button className="btn btn-primary transition-all duration-300 transform hover:scale-105">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-slate-600 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-white text-4xl lg:text-5xl font-bold">
            Contact Us: +880 15*******
          </h3>
        </div>
      </section>

      {/* Recommended Dishes Section */}
      <section className="my-16">
        <Recomend />
      </section>

      {/* Featured Dishes Section */}
      {/* <section className="my-16">
        <Featured />
      </section> */}

      {/* Testimonials Section */}
      <section className="my-16">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
