import git from "../assets/github.png";
import linkin from "../assets/linkedin.png";
import email from "../assets/email.png";
import phone from "../assets/telephone.png";
import resume from "../assets/resume.png";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black w-[100%] h-[50%] absolute top-[450%] flex flex-row justify-evenly items-center roboto"
    >
      <div className="flex flex-col items-start ">
        <h1 className="roboto text-6xl mb-8">----- Contact -----</h1>
        <div id="phone" className="flex flex-row items-center h-[30px] m-2">
          <img src={phone} alt="phone" className="h-[30px] w-[30px] m-4 " />
          <span>065-4264628</span>
        </div>
        <div id="email" className="flex flex-row items-center  h-[30px] m-2">
          <img
            src={email}
            alt="email"
            className="h-[30px] w-[30px] m-4 scale-100 hover:scale-125 transition ease-in-out duration-700"
          />
          <span>yanee_wiboonsak@hotmail.com</span>
        </div>
        <div id="icon" className="flex flex-row mt-20 w-[400px] justify-end">
          <div
            id="github"
            className="flex flex-row justify-evenly items-center  h-[30px] "
          >
            <a
              href="https://github.com/YaneeW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={git}
                alt="github"
                className="h-[40px] w-[40px] m-8 scale-100 hover:scale-125 transition ease-in-out duration-700"
              />
            </a>
          </div>
          <div
            id="linkin"
            className="flex flex-row justify-start items-center  h-[30px]"
          >
            <a
              href="https://www.linkedin.com/in/yanee-wiboonsak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkin}
                alt="linkin"
                className="h-[40px] w-[40px] m-8 scale-100 hover:scale-125 transition ease-in-out duration-700"
              />
            </a>
          </div>

          <div
            id="resume"
            className="flex flex-row justify-start items-center  h-[30px]"
          >
            <a href="https://drive.google.com/file/d/1GTLQi_ImXQr64klTy9ZmA7FqzQ5FtaAx/view?usp=sharing">
              <img
                src={resume}
                alt="resume"
                className="h-[40px] w-[40px] m-8 scale-100 hover:scale-125 transition ease-in-out duration-700"
              />
            </a>
          </div>
        </div>
      </div>

      <form
        action="https://getform.io/f/32807a0d-0f00-4ffd-9b86-f01e19be0219"
        method="POST"
        className="flex flex-col items-start"
      >
        <input
          type="text"
          name="name"
          className="w-[500px] h-[50px] mb-5 rounded-md p-4 text-black "
          placeholder="Fill your name"
        />

        <input
          type="text"
          name="Email"
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
    </section>
  );
}
export default Contact;
