import portfolio from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portafolio = portfolio.find((item) => item.id === activeID);
  const modalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portafolio.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portafolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portafolio.description}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Technologies:
            </h4>
            {portafolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-lg text-[14px] leading-2"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portafolio.siteUrl} target="_blank">
            <button className="bg-primaryColor text-white rounded-[8px] mt-8 font-[500] py-2 px-4 mx-8 hover:bg-headingColor ease-in duration-200">
              Link to the site
            </button>
          </a>
        </div>

        <button
          onClick={modalHandler}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-md cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
