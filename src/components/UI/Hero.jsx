import profileImg from "../../assets/images/meee.jpg";
import CountUp from "react-countup";
import cvFile from "../../assets/acdev.pdf";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[40px] sm:leading-[46px]"
            >
              I'm Angel Carrasco <br />
              Fullstack Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href={cvFile} download="cv.pdf">
                <button className="bg-primaryColor text-white animate-bounce animate-infinite font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg">
                  <i className="ri-download-line"></i>Download CV
                </button>
              </a>

              <a
                className=" text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                href="#portfolio"
              >
                See my Projects
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-fill"></i>
              </span>
              My name is Angel Carrasco and can help you build great Web Hello,
              I'm Angel Carrasco. As a Fullstack Developer, I specialize in
              crafting high-performance web applications using React for the
              frontend and Node for the backend. My primary focus is on the MERN
              Stack, which enables me to develop comprehensive and cohesive
              apps. <br />I hold certifications in both React and Node,
              underscoring my dedication and expertise in these technologies.
              Currently, I'm privileged to serve as a Junior Developer at a
              prominent local company in the Dominican Republic, where I employ
              tools such as Next JS, SQL Server, and React in my day-to-day
              projects.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Contact Me:
              </span>
              <span className="animate-bounce animate-infinite">
                <a
                  className="text-smallTextColor text-[24px] font-[600] transform transition-transform duration-300 hover:text-primaryColor hover:scale-105 hover:-translate-y-1"
                  href="https://www.linkedin.com/in/angel-carrasco24/"
                  target="_blank"
                  rel="noopener noreferrer" // No olvides este atributo por razones de seguridad.
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="animate-bounce animate-infinite">
                <a
                  className="text-smallTextColor text-[24px] font-[600] transform transition-transform duration-300 hover:text-primaryColor hover:scale-105 hover:-translate-y-1"
                  href="https://github.com/acarrascocesa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="animate-bounce animate-infinite">
                <a
                  className="text-smallTextColor text-[24px] font-[600] transform transition-transform duration-300 hover:text-primaryColor hover:scale-105 hover:-translate-y-1"
                  href="https://www.instagram.com/josecesa25/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Profile IMG */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <div class="card">
                <div class="image-box">
                  <img className="rounded-xl" src={profileImg} alt="" />
                </div>
                <div class="text-box">
                  <div class="main">
                    <span>Angel Carrasco</span>
                  </div>
                  <div class="sub">
                    <span>Fullstack Developer</span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Year of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={35} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
