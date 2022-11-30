export default function Sidebar() {
  return (
    <div className="lg:w-60 lg:fixed left-0 top-0 flex lg:h-full shadow-md bg-slate-300 p-6 flex-col justify-between">
      <ul className="relative lg:mt-12 mb-6">
        <li className="relative flex items-center gap-4 mb-4">
          <a
            className="flex items-center gap-1 hover:gap-2 hover:text-slate-500 transition-all duration-500"
            href="https://www.linkedin.com/in/cody-tower-813a465a/"
          >
            Linkedin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </li>

        <li className="relative flex items-center gap-4 mb-4">
          <a
            className="flex items-center gap-1 hover:gap-2 hover:text-slate-500 transition-all duration-500"
            href="mailto:cody.m.tower@gmail.com"
          >
            Email
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </li>

        <li className="relative flex items-center gap-4">
          <a
            className="flex items-center gap-1 hover:gap-2 hover:text-slate-500 transition-all duration-500"
            href="https://github.com/brijr"
          >
            Other Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div className=" text-sm">
        <p className="p-4 bg-slate-200 rounded-md mb-6">
          Thank you for visiting. Please reach out to me with any questions.
        </p>
        <p className="text-xs italic">
          © Cody Tower. <a href="https://b98.io">All Rights Reserved</a>.
        </p>
      </div>
    </div>
  );
}
