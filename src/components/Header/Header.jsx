import { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[10px]">
            <span className="animate-rotate-x animate-infinite cursor-pointer w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              AC
            </span>
            <div className="leading-[20px]">
              <h2 className="cursor-pointer text-xl text-smallTextColor font-[700]">
                FULLSTACK
              </h2>
              <p className="text-smallTextColor text-[18px] font-[500]">
                DEVELOPER
              </p>
            </div>
          </div>
          <div className="menu hidden md:block">
            <ul className="flex items-center gap-10">
              <li>
                <a className="menu-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="menu-link" href="#work">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a className="menu-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li>
                <a className="menu-link" href="#portfolio">
                  PORTFOLIO
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <span
              className="text-2xl text-smallTextColor cursor-pointer"
              onClick={toggleMenu}
            >
              <i className="ri-menu-5-line"></i>
            </span>
            {menuOpen && (
              <div className="absolute top-[78px] right-0 bg-white rounded-md shadow-lg mt-2">
                <ul className="py-2">
                  <li>
                    <a className="menu-link block px-4 py-2" href="#about">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a className="menu-link block px-4 py-2" href="#work">
                      EXPERIENCE
                    </a>
                  </li>
                  <li>
                    <a className="menu-link block px-4 py-2" href="#services">
                      SERVICES
                    </a>
                  </li>
                  <li>
                    <a className="menu-link block px-4 py-2" href="#portfolio">
                      PORTFOLIO
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
