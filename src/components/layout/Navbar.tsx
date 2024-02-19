"use client";

function Navbar() {
  const switchMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className=" h-[var(--navbar-height)] flex bg-lightBlack backdrop-blur">
      <div className="container flex justify-between  items-center dark:text-white">
        {/* <Image src=""/> */}
        <h3 className="text-xl font-bold ">RMS</h3>

        <button
          onClick={switchMode}
          className="flex items-center gap-2 text-lg"
        >
          <span className="w-9 h-9 rounded-full bg-black dark:bg-white"></span> Light Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
