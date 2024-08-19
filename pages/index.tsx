import Head from "next/head";
import Image from "next/image";

// Component Imports
import Positive from "../components/Positive";
import Relationships from "../components/Relationships";
import Outside from "../components/Outside";

// Image Imports
import cody from "../public/cody.jpeg";

export default function Home() {
  return (
    <main className="max-w-screen-2xl text-slate-900">
      <Head>
        <title>
          Cody Tower | Champion of Great Places to Work & Great Places to Live
        </title>
        <link
          rel="icon"
          href="https://cody-tower.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcody.99ee36ba.jpeg&w=640&q=75"
        />
      </Head>

      <div
        className="p-8 lg:px-24 lg:pb-12 lg:pt-24 lg:ml-60"
        id="introduction"
      >
        <Image
          src={cody}
          className="mb-12 w-32 rounded-lg"
          alt="Photo of Cody Tower"
        ></Image>
        <h1 className="text-4xl md:text-6xl italic mb-6 flex flex-col lg:flex-row lg:items-end">
          Cody Tower{" "}
          <small className="text-sm text-slate-600 mt-2 lg:mb-1">
            Salt Lake City, Utah
          </small>
        </h1>
        <h3 className="text-xl mb-6">
          Champion of Great Places to Work & Great Places to Live
        </h3>
        <p className="p-4 bg-slate-50 rounded-md text-lg">
          Cody is a principle-centered, serving-leader who listens. A devoted
          healthcare professional with over 20 years of progressive leadership
          and management experience. Cody is qualified to strengthen teams,
          create growth, assure quality service, and build culture, in any
          healthcare environment. Cody is passionate about the care, success,
          and happiness of others and he strives to help others feel their
          infinite worth.
        </p>
      </div>

      <Positive></Positive>
      <Outside></Outside>
      <Relationships></Relationships>
    </main>
  );
}
