import ThreeBackground from "./ThreeBackground";

function Navbar() {
  return (
    <section
      id="navbar"
      className="absolute z-50 w-[100%] h-[5%] flex items-center justify-center syne"
    >
      <ThreeBackground />
      <nav
        id="nav"
        className="flex flex-row justify-around items-center w-[50%] h-[30%] rounded-full   shadow-md shadow-[#C6C6C6] text-[#D6EDFF]"
      >
        <div className="p-[5%] scale-100 hover:font-bold hover:scale-110 hover:text-[#FF00FF] transition ease-in-out duration-500 cursor-pointer">
          ABOUT
        </div>
        <div className="p-[5%] scale-100 hover:font-bold  hover:scale-110 hover:text-[#00FF00] transition ease-in-out duration-500 cursor-pointer">
          SKILL
        </div>
        <div className="p-[5%] scale-100 hover:font-bold  hover:scale-110 hover:text-[#FF0000] transition ease-in-out duration-500 cursor-pointer">
          PROJECT
        </div>
        <div className="p-[5%] scale-100 hover:font-bold  hover:scale-110 hover:text-[#FFFF33] transition ease-in-out duration-500 cursor-pointer">
          CONTACT
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
