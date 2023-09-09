import { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolio, setPortfolio] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolio(data);
    }
    if (selectTab === "frontend") {
      setPortfolio(data.filter((item) => item.category === "Frontend"));
    }
    if (selectTab === "backend") {
      setPortfolio(data.filter((item) => item.category === "Backend"));
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor font-[700] text-[2rem] mb-5">
              My latest Projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("frontend")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4"
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectTab("backend")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4"
            >
              Backend
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolio?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure className="transition-transform duration-300 group-hover:scale-110">
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full absolute top-0 left-0 z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-150 transition-colors"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolio.length && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-150 transition-colors"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeId} />}
    </section>
  );
};

export default Portfolio;
