import course from "../assets/course.png";
import trip from "../assets/trip.png";
import tourist from "../assets/tourist.png";
import question from "../assets/question.png";

function Project() {
  return (
    <section
      id="project"
      className="absolute top-[300%] flex flex-col items-center"
    >
      <h1 className="text-8xl  syne custom-text-shadow m-[7%] flex justify-center items-center">
        PROJECT
      </h1>

      <main className="grid grid-cols-2 gap-y-20 place-items-center w-[80%] syne ">
        <div
          id="Trip"
          className="flex flex-col items-center w-[80%] border-4 border-[#212121] shadow-md shadow-[#212121] rounded-3xl  transform transition-transform duration-500"
        >
          <img
            src={trip}
            alt="Trip landing page"
            className="h-[400px] w-[600px] p-10"
          />
          <span className="text-center text-xl opacity-0 hover:opacity-100 transform hover:-translate-y-10 transition-transform duration-500">
            A responsive landing page of Trip tour package
          </span>
          <span className="text-center text-xl p-4 opacity-0 hover:opacity-100 transform hover:-translate-y-10 transition-transform duration-500">
            HTML,CSS.Tailwind
          </span>
        </div>
        <div
          id="Tourist"
          className="flex flex-col items-center w-[80%] bg-[#212121]"
        >
          <img
            src={tourist}
            alt="Tourist"
            className="h-[400px] w-[600px] p-10"
          />
          <span className="text-center text-md">
            A tourist website to serach tourist attraction that user interest
          </span>
          <span className="text-center text-xl p-4">React + Vite</span>
        </div>
        <div
          id="Questin blog"
          className="flex flex-col justify-evenly items-center w-[80%] bg-[#212121]"
        >
          <img
            src={question}
            alt="Questin blog"
            className="h-[400px] w-[600px] p-10"
          />
          <span className="text-center text-xl">
            A question blog post with CRUD
          </span>
          <span className="text-center text-xl p-4">
            Node.js,Express,MongoDB
          </span>
        </div>
        <div
          id="Courseflow"
          className="flex flex-col justify-center items-center w-[80%] bg-[#212121]"
        >
          <img
            src={course}
            alt="course-flow"
            className="h-[400px] w-[600px] p-10"
          />
          <span className="text-center text-sm">
            E-commerce website with course,lesson,sublesson card. Implemented
            user authentication and admin panel for subscription, create course
            management
          </span>
          <span className="text-center text-xl p-4">
            React + Vite ,Node.ja ,Express, Supabase(sql)
          </span>
        </div>
      </main>
    </section>
  );
}

export default Project;
