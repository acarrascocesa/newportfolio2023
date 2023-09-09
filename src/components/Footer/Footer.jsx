const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#26a0da] to-[#4ea5d9] py-5">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-lg font-light mb-4 md:mb-0">
          <p>
            Angel Carrasco&copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            className="text-white text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out"
            href="https://www.linkedin.com/in/angel-carrasco24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            className="text-white text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out"
            href="https://github.com/acarrascocesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            className="text-white text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out"
            href="https://www.instagram.com/josecesa25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
