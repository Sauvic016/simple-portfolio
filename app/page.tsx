import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#191919] text-white  md:p-10  p-5 lg:p-22 lg:w-[50%] mx-auto w-full">
      <section className="mb-12 flex flex-col  ">
        <div className="flex items-center gap-3 ">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ">
            <Image src="/profile.png" alt="Sauvic Paul Choudhury" width={1200} height={1200} className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="text-xl  font-medium">Sauvic P. Choudhury</h1>
            <p className="text-neutral-400 text-sm mb-1">Bengaluru,India</p>
            <a target="_blank" href={`${process.env.NEXT_PUBLIC_PDFDRIVE_URL}`}>
              <button className="flex gap-2 border hover:border-neutral-500 transition-all hover:scale-105 px-3 py-1 border-neutral-600 rounded-full text-xs items-center cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="12"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path>
                </svg>
                <p>View Resume</p>
              </button>
            </a>
          </div>
        </div>

        <h1 className="mt-5 text-lg ">
          <span className="border-b-1 border-neutral-500">About</span>
        </h1>

        <p></p>
        <div className="flex flex-col text-justify text-sm leading-loose tracking-wide gap-5">
          <p className="text-neutral-400">
            {` A Frontend Engineer, deeply passionate about FullStack. `}
            <br />
            {`I'm building`}{" "}
            <Link
              className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed text-neutral-300 hover:text-yellow-200 transition-all undefined"
              href={`${process.env.NEXT_PUBLIC_REVIEWSNAP_URL}`}
            >
              ReviewSnap
            </Link>{" "}
            {`a review taking tool, on weekends :)`}
          </p>

          <p className="text-neutral-400">
            you can find me on{" "}
            <Link
              target="_blank"
              className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed text-neutral-300 hover:text-yellow-200 transition-all undefined"
              href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
            >
              Linkedin
            </Link>
            ,{" "}
            <Link
              target="_blank"
              className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed text-neutral-300 hover:text-yellow-200 transition-all undefined"
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
            >
              Github
            </Link>
            ,or just drop a mail at{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_GMAIL_URL}`}
              target="_blank"
              className="text-neutral-300 hover:text-yellow-200 transition-all"
              rel="noreferrer"
            >
              Gmail
            </Link>{" "}
          </p>
        </div>
      </section>

      <section className="mb-2  ">
        <Link
          href="/experience"
          className="flex items-center text-neutral-50 hover:text-yellow-200 transition-colors mt-4 w-fit "
        >
          <ArrowRight className="ml-1 h-4 w-4" /> <span className="border-b-1 border-neutral-500">Work Experience</span>
        </Link>
      </section>

      <section className="mb-2 ">
        <Link
          href="/projects"
          className="flex items-center text-neutral-50 hover:text-yellow-200 transition-colors mt-4 w-fit"
        >
          <ArrowRight className="ml-1 h-4 w-4" />
          <span className="border-b-1 border-neutral-500">Projects</span>
        </Link>
      </section>

      <section className="mb-2">
        <Link
          href="/education"
          className="flex items-center text-neutral-50 hover:text-yellow-200 transition-colors mt-4 w-fit"
        >
          <ArrowRight className="ml-1 h-4 w-4" /> <span className="border-b-1 border-neutral-500">Education</span>
        </Link>
      </section>
    </main>
  );
}
