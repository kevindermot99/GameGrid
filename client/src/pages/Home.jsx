import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Games } from "../constants/data";
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { BrowserRouter, Link, useParams } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import Sidebar from "../components/Sidebar";
// import Swiper from 'swiper';
// import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import { BsCart } from "react-icons/bs";
import ButtonLink from "../components/ButtonLink";
import ButtonClick from "../components/ButtonClick";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { GoGift } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniFire } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { LuExternalLink } from "react-icons/lu";
import { TbDoorEnter } from "react-icons/tb";
import Footer from "../components/Footer";
import Logo from "../assets/logo.png";
import SquareImage from "../components/SquareImage";
import { FaDownload } from "react-icons/fa";
import PosterImage from "../components/PosterImage";
import VideoSample from "../assets/Cyberpunk 2077.mp4";
import { TbVolume } from "react-icons/tb";
import { TbVolume3 } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [modal, setModal] = useState(false);
  const [OpenedModalId, setOpendModalId] = useState("");
  const [muted, setMuted] = useState(true);

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem("gamezillaUserId");
    if (userId) {
      setUserId(userId);
    } else {
      setUserId("none");
    }
  }, []);

  const sortedGames = Games.sort(() => Math.random() - 0.5);

  // // swiper init
  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination, Autoplay, FreeMode],
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: false,
  //   slidesPerView: 2.3,
  //   loop: true,
  //   effect: "coverflow",
  //   spaceBetween: 10,
  //   coverflowEffect: {
  //     rotate: 0,
  //     stretch: 0,
  //     depth: 0,
  //     modifier: 1,
  //     slideShadows: false,
  //   },
  //   autoplay: {
  //     delay: 1300,
  //     pauseOnMouseEnter: true
  //   }

  // })

  // loadedr

  function numberFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handlemuted = () => {
    setMuted(!muted);
  };

  return (
    <div
      className={` relative h-svh flex flex-col overflow-x-clip text-text-color  `}
    >
      <div className="hero absolute top-0 left-0 w-full h-full -z-10 select-none pointer-events-none opacity-[0.02] "></div>
      <Menu userId={userId} />

      {/* hero */}
      <div className="w-full h-fit flex flex-col py-8 gap-5 mt-12">
        <div className="w-full h-fit flex items-center justify-center flex-col gap-4 z-20">
          <h1 className="text-[60px] leading-[64px] font-montserrat capitalize font-bold tracking-tight text-center text-body-color dark:text-text-color  ">
            Get Access to Hundreds <br /> of Free Games!
          </h1>
          <p className="font-montserrat font-semibold  text-body-color/80 dark:text-text-color-light text-[17px] text-center max-w-[400px]">
            Browse, download, and request games all absolutely free of charge
          </p>
        </div>

        <div className="w-full translate-y-12 z-10 px-4">
          <form className="relative w-full flex items-center justify-center">
            <label className="w-full h-[55px] max-w-[500px] relative ring-8 dark:ring-body-color ring-white dark:bg-body-color bg-stone-100 rounded-2xl">
              <input
                type="search"
                name="search"
                autoComplete="off"
                placeholder="Search for Games"
                className=" placeholder:text-text-color-light bg-text-color/90 py-0 pl-7 pr-28 text-black text-[16px] tracking-tight font-medium rounded-2xl w-full h-[55px] ring-[20px] ring-transparent transition duration-500 focus:ring-8 focus:ring-main-color"
              />
              <span className="absolute top-0 bottom-0 right-2 m-auto flex h-fit  ">
                <ButtonClick
                  title={"Search"}
                  type={"submit"}
                  icon={<HiMagnifyingGlass />}
                />
              </span>
            </label>
          </form>
        </div>

        <div className="flex items-center justify-center flex-col gap-2 overflow-x-clip overflow-y-visible relative ">
          <div className="absolute bottom-0 left-0 right-0 w-full h-[160px] z-10 bg-gradient-to-b dark:from-body-color/70 from-white/70 dark:to-body-color to-white flex justify-end items-center flex-col pb-6">
            <ButtonLink
              to={"/"}
              title={"Browse All Games"}
              icon={<HiMiniFire />}
            />
          </div>
          <div className="flex items-start justify-center gap-2 overflow-clip">
            {sortedGames.slice(9, 19).map((game, index) => (
              <Link
                to={`/game/${game.id}`}
                className=" rounded-xl  w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
                key={index}
              >
                <SquareImage src={game.poster} title={game.title} />
              </Link>
            ))}
          </div>
          <div className="flex items-start justify-center gap-2 overflow-clip">
            {sortedGames.slice(0, 9).map((game, index) => (
              <Link
                to={`/game/${game.id}`}
                key={index}
                className=" rounded-xl  w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
              >
                <SquareImage src={game.poster} title={game.title} />
              </Link>
            ))}
          </div>
          <div className="flex items-start justify-center gap-2 overflow-clip">
            {sortedGames.slice(8, 16).map((game, index) => (
              <Link
                to={`/game/${game.id}`}
                key={index}
                className=" rounded-xl  w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
              >
                <SquareImage src={game.poster} title={game.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* showcase */}
      <div className=" w-full relative">
        <div className="pattern-dots pattern-main-color pattern-bg-transparent pattern-size-4 opacity-25 pattern-opacity-60 absolute top-0 -z-10 left-0 w-full h-full ">
          <div className="absolute z-0 top-0 left-0 right-0 w-full h-[50%] bg-gradient-to-b dark:from-body-color/80 from-white/90 to-transparent "></div>
          <div className="absolute z-0 bottom-0 left-0 right-0 w-full h-[50%] bg-gradient-to-t dark:from-body-color/80 from-white/90 to-transparent "></div>
        </div>
        <div className="w-full h-fit min-h-[500px] z-10 p-20 flex items-center justify-center gap-[8%]">
          <div className="flex items-center justify-center flex-col gap-2">
            <IoGameControllerOutline className="text-main-color  text-[45px]" />
            <h1 className="font-montserrat font-bold dark:text-text-color text-body-color text-[60px] leading-[50px] py-2">
              23,492
            </h1>
            <p className="font-montserrat font-semibold text-text-color-light text-[20px] ">
              Games uploaded
            </p>
          </div>

          <div className="flex items-center justify-center flex-col gap-2">
            <HiOutlineUsers className="text-main-color  text-[45px]" />
            <h1 className="font-montserrat font-bold dark:text-text-color text-body-color text-[70px] leading-[50px] py-2">
              492
            </h1>
            <p className="font-montserrat font-semibold text-text-color-light text-[20px] ">
              Gamers joined
            </p>
          </div>

          <div className="flex items-center justify-center flex-col gap-2">
            <GoGift className="text-main-color  text-[45px]" />
            <h1 className="font-montserrat font-bold dark:text-text-color text-body-color text-[70px] leading-[50px] py-2">
              100%
            </h1>
            <p className="font-montserrat font-semibold text-text-color-light text-[20px] ">
              Free for all
            </p>
          </div>
        </div>
      </div>

      {/* most downloaded */}
      <div className="w-full h-fit py-14">
        <div className="w-full h-fit flex flex-col px-16">
          <h1 className="text-[28px] leading-[32px] capitalize font-DMsans font-bold w-full text-center tracking-tight  text-body-color dark:text-text-color">
            Most Downloaded Games <br /> of all time.
          </h1>
          <p className="text-[14px] leading-[15px] capitalize font-DMsans font-medium w-full text-center text-text-color-light pt-2 mb-4">
            Top ranked by downloads count
          </p>
          <div className="h-fit mt-9 ">
            <div className="gridRespo ">
              {Games.slice(0, 18).map((game, index) => (
                <Link
                  to={`/game/${game.id}`}
                  key={index}
                  className="group h-full w-full rounded-lg cursor-pointer mb-2 relative"
                >
                  <div className=" h-[250px] ">
                    <PosterImage src={game.poster} title={game.title} />
                  </div>
                  <p className="font-montserrat font-bold text-base line-clamp-1  text-body-color dark:text-text-color/70 pt-2 px-1">
                    {game.title}
                  </p>
                  <p className="font-normal text-[13px] line-clamp-2  text-body-color dark:text-text-color-light max-w-[90%] px-1">
                    {game.description}
                  </p>
                  <p className="mb-2 font-semibold text-[13px] text-text-color-light flex items-center justify-between p-1 ">
                    <span className="flex items-center gap-1">
                      <FaDownload /> {numberFormat(game.downloads)}
                    </span>
                    <span className=" text-green-600 dark:text-green-800 ">
                      $0.00
                    </span>
                  </p>
                  <button
                    className={`absolute top-3 right-1 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-main-color p-2 rounded-full`}
                  >
                    <BsCart className="text-xl " />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CAT */}
      <div className="w-full h-fit gap-4 flex justify-between items-start px-16 pb-14 max-w-[2000px] mx-auto ">
        <div className="w-1/2 rounded-bl-[40px] rounded-tr-[40px] h-full bg-gradient-to-tl dark:from-container-color/60 from-stone-200/70 to-transparent px-12 py-12 flex items-center justify-center gap-2 relative overflow-clip ">
          {/* <div className="pattern-dots pattern-amber-300 origin-top pattern-bg-transparent pattern-size-4 pattern-opacity-5 h-full w-full absolute bottom-0 -left-0 opacity-[0.04] -z-10  "></div> */}
          <div className="w-full">
            <div className="flex items-center justify-start gap-1 pb-3 ">
              <div className="relative pb-1">
                <TbDoorEnter className="text-[23px] dark:text-[#A6A7A8] text-body-color" />
              </div>
              <p className="text-[15px] leading-[18px] dark:text-[#A6A7A8] text-body-color font-montserrat font-semibold w-full max-w-[90%] line-clamp-4 text-left flex items-center gap-3 whitespace-nowrap">
                Join Gamezilla
              </p>
            </div>
            <h1 className="text-[23px] leading-[28px] capitalize font-montserrat font-bold w-full text-left tracking-tight text-body-color dark:text-text-color ">
              Join the community!
            </h1>
            <p className="text-[15px] leading-[18px] font-DMsans  font-medium w-full max-w-[100%] line-clamp-4 text-left text-text-color-light pb-4">
              and Get access to New Games every month, don't miss out{" "}
            </p>
            <div className="flex items-center justify-start gap-5 w-full mt-1">
              <Link
                to={`/`}
                className="text-[15px] leading-[15px] capitalize font-DMsans font-semibold px-5 py-4 rounded-xl w-fit text-left dark:bg-[#333535] bg-stone-300/50 dark:text-[#A6A7A8] text-body-color hover:opacity-80 transition-all"
              >
                Join Gamezilla
              </Link>
              <Link
                to={`/`}
                className="text-[15px] leading-[15px] capitalize font-DMsans font-semibold w-fit text-left text-text-color/70 hover:underline "
              >
                Read FAQs
              </Link>
            </div>
          </div>

          <div className="w-fit min-w-fit">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/badge-11414370-9197805.png?f=webp"
              className="h-52 rotate-[25deg] origin-center pointer-events-none select-none dark:opacity-65 opacity-90 pt-4 max-lg:hidden"
              alt=""
            />
          </div>
        </div>

        <div className="w-1/2 rounded-tr-[40px] rounded-bl-[40px] h-full bg-gradient-to-br dark:from-container-color/60 from-stone-200/70 to-transparent px-12 py-12 flex items-center justify-center gap-2 relative overflow-clip  ">
          {/* <div className="pattern-dots pattern-stone-200 rotate-[25deg] origin-center pattern-bg-transparent pattern-size-4 pattern-opacity-10 h-[400px] w-[400px] absolute -bottom-[70px] -right-[160px] "></div> */}
          <div className="w-full">
            <div className="flex items-center justify-start gap-1 pb-3 ">
              <div className="relative pb-[2px]">
                <HiOutlineStar className="text-[23px] pointer-events-none dark:text-[#A6A7A8] text-body-color" />
              </div>
              <p className="text-[15px] leading-[18px] pointer-events-none dark:text-[#A6A7A8] text-body-color font-montserrat font-semibold w-full line-clamp-4 text-left  flex items-center gap-3 whitespace-nowrap">
                Rate Gamezilla
              </p>
            </div>
            <h1 className="text-[23px] leading-[28px] pointer-events-none capitalize font-montserrat font-bold w-full text-left tracking-tight text-body-color dark:text-text-color ">
              Star on GitHub
            </h1>
            <p className="text-[15px] leading-[18px] pointer-events-none font-DMsans  font-medium w-full max-w-[100%] line-clamp-4 text-left text-text-color-light pb-4">
              show us some love by giving a star to our Repository{" "}
            </p>
            <div className="flex items-center justify-start gap-5 w-fit mt-1">
              <a
                href=""
                className="text-[15px] leading-[15px] capitalize font-DMsans font-semibold px-5 py-4 rounded-xl w-fit text-left dark:bg-[#333535] bg-stone-300/50 dark:text-[#A6A7A8] text-body-color flex items-center justify-center gap-2 hover:opacity-80 transition-all"
              >
                <LuExternalLink /> Open GitHub
              </a>
            </div>
          </div>

          <div className="w-fit min-w-fit">
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-5562375-4642720.png?f=webp"
              className="h-52 rotate-[25deg] pointer-events-none select-none origin-center dark:opacity-65 opacity-90 pt-4 max-lg:hidden"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full h-fit t-14 pb-[80px] ">
        <div className="w-full h-fit flex flex-col px-16">
          <div className="w-full h-fit flex items-center justify-center flex-col gap-4 z-20">
            
            <div className=" w-full max-w-[1400px] max-h-[530px] h-fit aspect-video bg-transparent  mt-3 relative">
              <button
                onClick={handlemuted}
                className="group absolute top-3 right-3 font-montserrat font-bold transition backdrop-blur-md active:scale-90  text-black dark:text-text-color/70 dark:hover:text-white dark:backdrop-blur-md bg-white  dark:bg-footer-color/75 dark:hover:bg-text-color-light/40 cursor-pointer z-20 p-3 rounded-xl   "
              >
                {muted ? (
                  <TbVolume3 className="text-xl transition dark:text-text-color/70 dark:group-hover:text-white " />
                ) : (
                  <TbVolume className="text-xl transition dark:text-text-color/70 dark:group-hover:text-white " />
                )}

                {/* */}
              </button>
              <div className="absolute top-0 left-0 w-full h-full rounded-b-2xl bg-gradient-to-t from-footer-color/60 to-transparent aspect-square z-10 flex items-end justify-start gap-7 p-10 ">
                <div className="bg-footer-color w-[190px] rounded-xl overflow-clip ">
                  <PosterImage src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg" className="" />
                </div>
                <div>
                  <h1 className=" text-[55px] leading-[75px] font-bold tracking-tight font-montserrat">
                    Cyberpunk 2077
                  </h1>
                  <p className="font-montserrat font-semibold tracking-wider text-text-color/70 text-[14px] max-w-[700px] mb-5">
                    In a neon-lit city, hackers clash with corporations. Rebels
                    fight for freedom in a dystopian future, where technology
                    blurs the line between humanity and machine.
                  </p>
                  <Link
                    to={`/`}
                    className="text-[15px] text-black dark:text-text-color/70 dark:hover:text-white dark:backdrop-blur-md bg-white  dark:bg-footer-color/75 dark:hover:bg-text-color-light/40 transition duration-300 font-bold font-montserrat flex items-center gap-2 py-3 px-6 w-fit rounded-xl   "
                  >
                    GET
                  </Link>
                </div>
              </div>
              <video
                id="myVideo"
                src={VideoSample}
                muted={muted}
                autoPlay
                loop
                playsinline
                className="custom-video w-full h-full object-cover object-center rounded-2xl  pointer-events-none z-0"
              ></video>
            </div>

            <Link
              to={`/`}
              className="font-montserrat font-semibold self-end text-body-color/80 dark:text-text-color-light hover:text-main-color text-[17px] text-center max-w-[430px] flex items-center gap-1 "
            >
              Explore Collections
              <GoArrowRight className="text-xl " />
            </Link>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
