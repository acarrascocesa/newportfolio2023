const Footer = () => {
  return (
    <footer className="bg-[#26a0da] py-5">
      <div className="container flex items-center justify-between">
        <div className="text-white text-sm font-light">
          <p>
            Angel Carrasco&copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            className="text-white text-2xl font-semibold animate-jump animate-infinite"
            href="https://www.linkedin.com/in/angel-carrasco24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            className="text-white text-2xl font-semibold animate-jump animate-infinite"
            href="https://github.com/acarrascocesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            className="text-white text-2xl font-semibold animate-jump animate-infinite"
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
