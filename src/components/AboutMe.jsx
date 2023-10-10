import cloud from "../assets/cloud.png";
import quoteright from "../assets/quote-right.png";
import quoteleft from "../assets/quote-left.png";

function AboutMe() {
  return (
    <section className=" w-[100%]">
      <main
        id="about"
        className="text-white flex flex-row  items-start absolute top-[150%]"
      >
        <div
          id="about-me"
          className="syne text-8xl w-[50%]  pl-[15%] custom-text-shadow "
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
          className="absolute z-10 h-[200%] w-[100%] top-[70%]"
        />
        <img
          src={quoteleft}
          className="absolute z-1 w-[60px] right-[47%] top-[29%]"
          alt="quote"
        />
        <img
          src={quoteright}
          className="absolute z-1 w-[60px] top-[95%] right-[12%]"
          alt="quote"
        />
      </main>
    </section>
  );
}
export default AboutMe;
