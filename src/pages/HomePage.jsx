import dohamuseum1 from "../assets/images/dohamuseum1.jpg";
import lagrove from "../assets/images/lagrove.jpg";
import boatdubai from "../assets/images/boatdubai.jpg";
const HomePage = () => {
  return (
    <main className="bg-white">
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          Sabreen Munassar
        </h1>

        <p className="mt-4 text-base text-gray-600">
          Street, travel, and all of the in-between. A minimal portfolio of selected work.
        </p>
      </section>

      <section className="px-8 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="overflow-hidden">
            <img
              src={dohamuseum1}
              alt=""
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={lagrove}
              alt=""
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={boatdubai}
              alt=""
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
