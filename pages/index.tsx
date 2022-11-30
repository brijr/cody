import Head from "next/head";
import Image from "next/image";
// Component Imports
// import Sidebar from "../components/sidebar";
// Image Imports
import cody from "../public/cody.jpeg";

export default function Home() {
  return (
    <main className="max-w-screen-lg text-slate-900">
      <Head>
        <title>
          Cody Tower | Champion of Great Places to Work & Great Places to Live
        </title>
      </Head>

      <div className="p-8 lg:p-24 lg:ml-60">
        <Image
          src={cody}
          className="mb-12 w-32"
          alt="Photo of Cody Tower"
        ></Image>
        <h1 className="text-4xl md:text-6xl italic mb-6 flex flex-col lg:flex-row lg:items-end">Cody Tower <small className="text-sm text-slate-600 mt-2">Salt Lake City, Utah</small></h1>
        <h3 className="text-xl mb-6">
          Champion of Great Places to Work & Great Places to Live
        </h3>
        <p className="p-4 bg-slate-50 rounded-sm">
          I am a principle-centered, serving-leader who listens. A devoted
          healthcare professional with over 20 years of progressive leadership
          and management experience. I am qualified to strengthen teams, create
          growth, assure quality service, and build culture, in any healthcare
          environment. I am passionate about the care, success, and happiness of
          others and I strive to help others feel their infinite worth.{" "}
        </p>
      </div>
    </main>
  );
}
