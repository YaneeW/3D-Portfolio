import image from "../assets/image.png";
import quoteright from "../assets/quote-right.png";
import quoteleft from "../assets/quote-left.png";
import moon from "../assets/moon.png";
import cloud from "../assets/cloud.png";
import cloud1 from "../assets/cloud1.png";

function HeaderSection() {
  return (
    <section id="headersection" className=" w-[100%]">
      <main
        id="main-header"
        className=" flex felx-row items-center syne w-[100%]"
      >
        <img
          src={image}
          alt="Developer"
          className="w-[850px] h-[800px] absolute z-1 right-[50%] top-[15%] saturate-50 brightness-100 contrast-125"
        />
        <img
          src={moon}
          alt="moon"
          className="w-[40%] absolute left-[60%] top-[100%] animate-pulse delay-2000"
        />

        <img
          src={cloud}
          alt="cloud"
          className="absolute top-[55%] right-[20%] h-[90%] w-[100%]"
        />

        <div
          id="message-about"
          className="flex flex-col items-start justify-start absolute top-[25%] left-[50%] w-[50%] h-[70%] "
        >
          <h2 className="text-6xl pt-[13%] pb-[10%] custom-text-shadow">
            Hello..,
          </h2>
          <span className="text-8xl pl-[10%] gradient-text font-bold animate-bounce delay-1000 ">
            Yanee Wiboonsak
          </span>
          <p className="text-6xl pt-5 pl-[12%] custom-text-shadow">
            Full Stack developer.
          </p>
          {/* <button className="text-white  text-md font-bold rubik border w-[15%] h-[5%] absolute right-[20%] top-[45%] hover:text-[#333333] hover:border-[#FFFF00] hover:border-2  hover:bg-[#FFFF00] transition ease-in-out duration-500 cursor-pointer">
            CONTACT ME
          </button> */}
        </div>
      </main>
      {/* <main
        id="main-footer"
        className="text-white relative flex flex-row  items-start top-[80%]"
      >
        <div
          id="about-me"
          className="syne text-8xl w-[50%] pt-[3%] pl-[15%] custom-text-shadow"
        >
          ABOUT ME
        </div>
        <span
          id="content"
          className="text-2xl w-[40%] h-[50%] flex items-center mt-[8%] ml-[3%] text-justify"
        >
          I have a bachelor's degree in Industrial Education. Majoring in
          Electronic and Telecommunication Engineering. And an exclusive course
          on Full-stack software development at Techup. I have a lot of
          motivation to enhance my skills and knowledge. I am looking for an
          opportunity to use my professional and personal skills.
        </span>
        <img
          src={cloud}
          alt="cloud"
          className="absolute z-10 h-[100%] w-[100%] top-[70%] "
        />
        <img
          src={quoteleft}
          className="absolute z-1 w-[60px] right-[47%] top-[29%]"
          alt="quote"
        />
        <img
          src={quoteright}
          className="absolute z-1 w-[60px] bottom-[8%] right-[12%]"
          alt="quote"
        />
      </main> */}
    </section>
  );
}

export default HeaderSection;
