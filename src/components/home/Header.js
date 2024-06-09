import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Code to <span> </span>
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <ul className="text-white justify-center flex gap-8 my-6">
          <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 relative hover:text-white hover:translate-y-[-2px] hover:after:w-full after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 transition-transform md:p-0 md:dark:text-blue-500">
            <Link to="/servicios/algoAqui">Item 1</Link>
          </li>
          <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 relative hover:text-white hover:translate-y-[-2px] hover:after:w-full after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 transition-transform md:p-0 md:dark:text-blue-500">
            <Link to="/servicios/algoAqui">Item 2</Link>
          </li>
          <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 relative hover:text-white hover:translate-y-[-2px] hover:after:w-full after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 transition-transform md:p-0 md:dark:text-blue-500">
            <Link to="/servicios/algoAqui">Item 3</Link>
          </li>
          <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 relative hover:text-white hover:translate-y-[-2px] hover:after:w-full after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 transition-transform md:p-0 md:dark:text-blue-500">
            <Link to="/servicios/algoAqui">Item 4</Link>
          </li>
          <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 relative hover:text-white hover:translate-y-[-2px] hover:after:w-full after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 transition-transform md:p-0 md:dark:text-blue-500">
            <Link to="/servicios/algoAqui">Item 5</Link>
          </li>
        </ul>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;