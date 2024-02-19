export default function Home() {
  return (
    <main className="h-auto bg-background pb-20">
      <div className="relative container pt-12 flex flex-col gap-10 items-center">
        <h1 className="text-center">
          elevating <span className="text-primary">experiences</span>, one
          <br /> pixel at a time
        </h1>

        <p className="text-textGray text-center w-[45%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          laboriosam est, accusantium aliquid minima dolorum error perferendis
          cumque praesentium? Commodi quae optio aut assumenda doloribus culpa
          quis quod amet ullam.
        </p>

        <button className="bg-primary rounded-full py-2.5 px-5 text-black font-semibold text-lg hover:bg-primary/80 transition-colors ease-in-out ">
          Book an appointment
        </button>

        {/* Elements ========================= */}

        {/* Left side element ============= */}
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[30%] left-0 *:text-black *:dark:text-white w-10 h-10"
        >
          <rect
            x="20"
            y="20"
            width="12"
            height="12"
            rx="6"
            fill="currentColor"
          />
          <rect
            x="0.5"
            y="0.5"
            width="51"
            height="51"
            rx="25.5"
            stroke="currentColor"
          />
        </svg>

        {/* Right side element ============= */}

        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[5%] right-0 *:text-black *:dark:text-white w-10 h-10"
        >
          <rect
            x="20"
            y="20"
            width="12"
            height="12"
            rx="6"
            fill="currentColor"
          />
          <rect
            x="0.5"
            y="0.5"
            width="51"
            height="51"
            rx="25.5"
            stroke="currentColor"
          />
        </svg>

        {/* <Image src="/bg.png"/> */}
        <div className="w-full h-[600px] bg-lightBlack rounded-lg mt-4"></div>
      </div>
    </main>
  );
}
