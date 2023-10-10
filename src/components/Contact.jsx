import git from "../assets/github.png";
import linkin from "../assets/linkedin.png";
import email from "../assets/email.png";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black w-[100%] h-[50%] absolute top-[450%] flex flex-row justify-evenly items-center roboto"
    >
      {/* <div
        id="content"
        className="flex flex-row justify-evenly items-center roboto w-[100%]"
      > */}
      <div className="flex flex-col items-center">
        <h1 className="roboto text-5xl mb-16">----- Contact -----</h1>
        <div id="icon" className="flex flex-row justify-center items-center">
          <img
            src={git}
            alt="github"
            href=""
            className="h-[50px] w-[50px] m-4 scale-100 hover:scale-125 transition ease-in-out duration-700"
          />
          <img
            src={linkin}
            alt="linkin"
            className="h-[50px] w-[50px] m-4 scale-100 hover:scale-125 transition ease-in-out duration-700"
          />
          <img
            src={email}
            alt="email"
            className="h-[50px] w-[50px] m-4 scale-100 hover:scale-125 transition ease-in-out duration-700"
          />
        </div>
      </div>
      <div id="form" className="">
        <form
          action="https://getform.io/f/32807a0d-0f00-4ffd-9b86-f01e19be0219"
          method="POST"
          className="flex flex-col items-start"
        >
          <input
            type="text"
            className="w-[500px] h-[50px] mb-5 rounded-md p-4 text-black "
            placeholder="Fill your name"
          />

          <input
            type="text"
            className="w-[500px] h-[50px] mb-5 rounded-md p-4 text-black"
            placeholder="Fill your email"
          />
          <textarea
            name="message"
            rows="10"
            className="w-[500px] h-[100px] mb-10 rounded-md p-4 text-black"
            placeholder="Fill your message"
          />
          <button className="bg-white text-black w-[60px] h-[30px] rounded-sm hover:font-bold p-1 text-center">
            Send
          </button>
        </form>
      </div>
      {/* </div> */}
    </section>
  );
}
export default Contact;
