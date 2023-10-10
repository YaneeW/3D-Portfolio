import course from "../assets/course.png";
import trip from "../assets/trip.png";
import tourist from "../assets/tourist.png";
import question from "../assets/question.png";
import cloud from "../assets/cloud.png";

function Project() {
  return (
    <section
      id="project"
      className="absolute top-[290%] flex flex-col items-center w-[100%]"
    >
      <img
        src={cloud}
        alt="cloud"
        className="absolute  -left-[20%] -top-[5%] h-[40%] w-[60%]"
      />
      <img
        src={cloud}
        alt="cloud"
        className="absolute top-[60%] left-[30%] h-[50%] w-[80%]"
      />
      <h1 className="text-8xl syne custom-text-shadow m-[7%] flex justify-center items-center w-[30%]">
        PROJECT
      </h1>

      <main className="grid grid-cols-2 gap-10 place-items-center w-[80%] roboto">
        <div id="card" className="flex flex-col">
          <img
            src={trip}
            alt="Trip landing page"
            className="h-[400px] w-[600px] relative rounded-lg"
          />
          <div
            id="info"
            className="flex flex-col items-start justify-evenly w-[100%] p-6 text-md rounded-xl"
          >
            <span>A responsive landing page of Trip tour package</span>
            <span>HTML , CSS , Tailwind</span>
            <a
              target="_blank"
              href="https://tripp-landing-page.vercel.app/"
              className="bg-white text-black w-[60px] h-[30px] p-1 rounded-sm mt-2 text-center hover:font-bold"
            >
              View
            </a>
          </div>
        </div>
        <div id="card" className="flex flex-col">
          <img
            src={tourist}
            alt="Tourist"
            className="h-[400px] w-[600px] relative rounded-lg "
          />
          <div
            id="info"
            className="flex flex-col items-start justify-evenly w-[100%] p-6 text-md rounded-xl"
          >
            <span>
              A tourist website to serach tourist attraction that user interest
            </span>
            <span>React + Vite</span>
            <a
              target="_blank"
              href="https://github.com/YaneeW/Tourist"
              className="bg-white text-black w-[60px]  h-[30px]  p-1 rounded-sm mt-2 text-center hover:font-bold"
            >
              View
            </a>
          </div>
        </div>
        <div id="card" className="flex flex-col ">
          <img
            src={question}
            alt="Questin blog"
            className="h-[400px] w-[600px] relative rounded-lg "
          />
          <div
            id="info"
            className="flex flex-col items-start justify-evenly w-[100%] p-6 rounded-xl"
          >
            <span className="text-lg">A question blog post with CRUD</span>
            <span className="text-lg">Node.js,Express,MongoDB</span>
            <a
              target="_blank"
              href="https://github.com/YaneeW/Question-blog-post"
              className="bg-white text-black w-[60px]  h-[30px]  p-1 rounded-sm mt-2 text-center text-md hover:font-bold"
            >
              View
            </a>
          </div>
        </div>
        <div id="card" className="flex flex-col">
          <img
            src={course}
            alt="course-flow"
            className="h-[400px] w-[600px] relative rounded-lg "
          />
          <div
            id="info"
            className="flex flex-col items-start justify-evenly w-[100%] p-6 text-md rounded-xl"
          >
            <span className="">
              E-commerce website with course,lesson,sublesson card. Implemented
              user authentication and admin panel for subscription, create
              course management
            </span>
            <span className="">
              React + Vite ,Node.ja ,Express, Supabase(sql)
            </span>
            <a
              target="_blank"
              href="https://github.com/YaneeW/courseflow"
              className="bg-white text-black w-[60px]  h-[30px]  p-1 rounded-sm mt-2 text-center hover:font-bold"
            >
              View
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Project;
