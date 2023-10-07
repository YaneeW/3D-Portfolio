import image from "../assets/image.png";
import quoteright from "../assets/quote-right.png";
import quoteleft from "../assets/quote-left.png";
import moon from "../assets/moon.png";
import cloud from "../assets/cloud.png";
import cloud1 from "../assets/cloud1.png";

function HeaderSection() {
  return (
    <section id="headersection" className="absolute z-1 w-[100%] h-[70%] ">
      <mian
        id="main-header"
        className=" flex felx-row items-center syne relative w-[100%] h-[50%]"
      >
        {/* <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-500 to-yellow-300 w-[1000px] h-[1000px] absolute z-1 right-[60%] top-[30%] rounded-full blur-2xl"></div> */}
        <img
          src={cloud}
          alt="cloud"
          className="absolute z-10 top-[43%] right-[30%] h-[68%] w-[90%]"
        />
        <img
          src={moon}
          alt="moon"
          className="w-[40%] absolute left-[55%] top-[70%] animate-pulse delay-2000"
        />

        <img
          src={image}
          alt="Developer"
          className="w-[850px] h-[800px] absolute z-2 right-[50%] top-[12%] saturate-50 brightness-100 contrast-125"
        />
        <div
          id="message-about"
          className="flex flex-col items-start justify-start relative left-[50%] w-[50%] h-[70%]"
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
      </mian>
      <main
        id="main-footer"
        className="text-white relative  flex flex-row  items-start h-[30%]"
      >
        <div
          id="about-me"
          className="syne text-8xl w-[50%] pt-[3%] pl-[15%] custom-text-shadow"
        >
          ABOUT ME
        </div>
        <span
          id="content"
          className="text-2xl w-[40%] h-[50%] flex items-center mt-[5%] ml-[3%] text-justify"
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
          className="absolute z-10 h-[100%] w-[100%] top-[30%] "
        />
        <img
          src={quoteleft}
          className="absolute z-1 w-[60px] right-[47%] top-[20%]"
          alt="quote"
        />
        <img
          src={quoteright}
          className="absolute z-1 w-[60px] bottom-[47%] right-[12%]"
          alt="quote"
        />
      </main>
    </section>
  );
}

export default HeaderSection;
