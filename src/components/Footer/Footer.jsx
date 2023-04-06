const Footer = () => {
  return (
    <footer className="bg-[#29292b]">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-4">
          <div className="w-full h-10 sm:w-1/2">
            <h2 className="text-[16px] leading-10 text-white font-[200] mb-5 md:text-[1.5rem]">
              Developed with REACT 2023
            </h2>
          </div>
          <a
            className="text-white text-[24px] font-[600]"
            href="https://www.linkedin.com/in/angel-carrasco24/"
            target="_blank"
          >
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a
            className="text-white text-[24px] font-[600]"
            href="https://github.com/acarrascocesa/"
            target="_blank"
          >
            <i class="ri-github-fill"></i>
          </a>
          <a
            className="text-white text-[24px] font-[600]"
            href="https://www.instagram.com/josecesa25/"
            target="_blank"
          >
            <i class="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
