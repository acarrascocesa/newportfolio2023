import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import apps from "../../assets/images/apps.png";

const Work = () => {
  return (
    <section id="work">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 uppercase">
            My Work Experience
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Here is a summary of my work experience.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Work Experience Item 1 */}
                <div data-aos="fade-right" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={frontendImg} alt="frontend" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        Junior Developer at Marmotech
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      –I work as a Junior Developer in a local company, y,
                      utilizing React, SQL Server, and Next.js. - Developed and
                      maintained web applications using React. - Utilized SQL
                      Server for database management. - Collaborated with a team
                      to implement Next.js for server-side rendering.
                    </p>
                  </div>
                </div>
                {/* Work Experience Item 2 */}
                <div data-aos="fade-left" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={backendImg} alt="backend" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        Remote Ecommerce Maintenance at Janam Muebles
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      - Provided remote maintenance services for an ecommerce
                      platform built with React, Nest.js, and Postgres. -
                      Assisted with bug fixes and troubleshooting. - Conducted
                      regular code reviews and optimizations.
                    </p>
                  </div>
                </div>
                {/* Work Experience Item 3 */}
                <div data-aos="fade-right" data-aos-duration="1200">
                  <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 flex items-center justify-center">
                        <figure>
                          <img src={apps} alt="mobile development" />
                        </figure>
                      </div>
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ml-4">
                        Senior Technical Support at Direccion General Aduanas
                      </h3>
                    </div>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                      ▪ PC, Laptops, Printers repairs. ▪ Operating systems
                      installation. ▪ Networks and servers.
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

export default Work;
