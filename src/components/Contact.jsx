import phone from "../assets/telephone.png";
import discord from "../assets/discord.png";
import linkin from "../assets/linkedin.png";
import email from "../assets/email.png";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black w-[100%] h-[50%] absolute top-[430%] flex flex-col"
    >
      <h1 className="syne text-5xl mt-[5%] ml-[13%]">-----Contact-----</h1>
      <div id="content" className="flex flex-row justify-evenly items-center">
        <div id="icon" className="flex flex-row justify-center items-center">
          <img src={phone} alt="phone" className="h-[50px] w-[50px] m-4" />
          <img src={discord} alt="discord" className="h-[50px] w-[50px] m-4" />
          <img src={linkin} alt="linkin" className="h-[50px] w-[50px] m-4" />
          <img src={email} alt="email" className="h-[50px] w-[50px] m-4" />
        </div>
        <div id="form" className="flex flex-col justify-around items-start">
          <label className="flex flex-col">
            Name
            <input
              className="w-[500px] h-[40px]"
              placeholder="Fill your name"
            />
          </label>
          <label className="flex flex-col">
            Email
            <input
              className="w-[500px] h-[40px]"
              placeholder="Fill your name"
            />
          </label>
          <label className="flex flex-col">
            Message
            <input
              className="w-[500px] h-[40px]"
              placeholder="Fill your name"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
export default Contact;
