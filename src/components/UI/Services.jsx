import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import apps from "../../assets/images/apps.png";
import mern from "../../assets/images/mern.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 uppercase">
            What can I build?
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            I can build Web Applications for both Frontend and Backend using
            React, Node, HTML, CSS, and JavaScript. I can also create mobile
            applications with React Native.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Frontend Development */}
                <div data-aos="fade-right" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={frontendImg} alt="frontend" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        Frontend Development
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      I use React and Next.js for Frontend Apps. I can work with
                      CSS, Tailwind, Styled Components, and Sass for styling.
                    </p>
                  </div>
                </div>
                {/* Backend Development */}
                <div data-aos="fade-left" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={backendImg} alt="backend" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        Backend Development
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      I use Node for the Backend. I can work with Express,
                      MongoDB, Postgres, and SQL Server for Databases.
                    </p>
                  </div>
                </div>
                {/* Mobile Development */}
                <div data-aos="fade-right" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={apps} alt="mobile development" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        Mobile Development
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      I use React Native for mobile applications.
                    </p>
                  </div>
                </div>
                {/* MERN Development */}
                <div data-aos="fade-left" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={mern} alt="MERN development" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        MERN Development
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      I use the MERN Stack to build Fullstack Apps: MongoDB,
                      Express, React, and Node.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
