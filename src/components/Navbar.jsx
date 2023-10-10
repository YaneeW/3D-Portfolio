function Navbar() {
  return (
    <section
      id="navbar"
      className="w-[100%] h-[15%] flex items-center justify-center syne"
    >
      <nav
        id="nav"
        className="flex flex-row justify-around items-center w-[50%] h-[35%] rounded-full   shadow-md shadow-[#C6C6C6] text-[#D6EDFF]"
      >
        <a
          href="#moon"
          className="p-[5%] scale-100 hover:font-bold hover:scale-110 hover:text-[#FF00FF] transition ease-in-out duration-500 cursor-pointer"
        >
          ABOUT
        </a>
        <a
          href="#cloud"
          className="p-[5%] scale-100 hover:font-bold  hover:scale-110 hover:text-[#00FF00] transition ease-in-out duration-500 cursor-pointer"
        >
          SKILL
        </a>
        <a
          href="#project"
          className="p-[5%] scale-100 hover:font-bold  hover:scale-110 hover:text-[#FF0000] transition ease-in-out duration-500 cursor-pointer"
        >
          PROJECT
        </a>
        <a
          href="#contact"
          className="p-[5%] scale-100 hover:font-bold  hover:scale-110 hover:text-[#FFFF33] transition ease-in-out duration-500 cursor-pointer"
        >
          CONTACT
        </a>
      </nav>
    </section>
  );
}

export default Navbar;
