export default function Sidebar() {
  return (
    <div className="w-60 h-full shadow-md bg-slate-300 p-6 absolute flex flex-col justify-between">
      <ul className="relative text-sm">
        <li className="relative flex items-center gap-4">
          <a href="https://www.linkedin.com/in/cody-tower-813a465a/">
            Linkedin
          </a>
          <i className="gg-link"></i>
        </li>

        <li className="relative flex items-center gap-4">
          <a href="mailto:cody.m.tower@gmail.com">Email</a>
          <i className="gg-mail"></i>
        </li>

        <li className="relative flex items-center gap-4">
          <a href="https://www.linkedin.com/in/cody-tower-813a465a/">
            Linkedin
          </a>
        </li>
      </ul>
      <div className="p-4 bg-slate-200 rounded-md text-sm">
        <p>Thank you for visiting. Please reach out to me with any questions.</p>
      </div>
    </div>
  );
}
