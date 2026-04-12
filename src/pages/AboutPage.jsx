import aboutImage from "../assets/images/sabreen.jpg";
const AboutPage = () => {
  return (
    <main className="px-10 py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* LEFT - TEXT */}
        <div className="max-w-xl">
          <h1 className="text-2xl font-medium mb-10">About</h1>

          <div className="space-y-6 text-gray-700 leading-7 text-[15px]">
            <p>
              B.S. in Software Engineering from the University of
              Michigan-Dearborn
            </p>

            <p>
              Interested in visual arts and technology, and the space where they
              intersect.
            </p>

            <p>
              I approach photography through storytelling, focusing on capturing
              moments as they naturally happen. What I enjoy most is documenting
              life in the moment.
            </p>

            <p>
              I often color grade my images with warmer tones to enhance the
              mood and preserve the feeling of the scene. 
            </p>

            <p>
              Featured in{" "}
              <span className="font-medium text-black">FujiLove Magazine</span>,
              December 2025.
            </p>
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-full lg:w-[400px] aspect-square">
          <img src={aboutImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
