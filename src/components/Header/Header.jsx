const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      {/* Logo */}
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              AC
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Angel</h2>
              <p className="text-smallTextColor text-[18px] font-[500]">
                Developer
              </p>
            </div>
          </div>
          {/* Menu */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[500]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[500]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[500]" href="#portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          {/* Menu Right */}
          <div className="flex items-center gap-4 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[30px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
            <button className="flex items-center gap-2">
              <i className="ri-send-plane-line"></i> Hire Me
            </button>
          </div>
          <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
            <i className="ri-menu-5-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
