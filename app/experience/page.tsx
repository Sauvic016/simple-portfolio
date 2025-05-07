import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#191919] text-white p-6 md:p-10 max-w-3xl mx-auto">
      <Link href="/" className="flex items-center text-[#999999] hover:text-white transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-8">
        <span className="border-b-2 border-neutral-500">Work Experience</span>
      </h1>

      <div className="space-y-10">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h2 className="text-xl font-semibold">
              {" "}
              <span className="border-b-1 border-neutral-600">Frontend Developer</span>
            </h2>
            <div className="text-[#8f8f8f]">Apr 2025 - May 2025</div>
          </div>
          <div className="text-[#999999] mb-4">
            <Link target="_blank" href={`${process.env.NEXT_PUBLIC_HEXADLLP_URL}`} className="hover:text-yellow-200">
              HEXAD Engineering LLP
            </Link>
            , Remote
          </div>
          <p className="text-[#e6e6e6] mb-3">
            Developed and optimized the company website focusing on user experience and performance.
          </p>
          <ul className="list-disc list-inside text-[#999999] space-y-1">
            <li>Built responsive UI components using Nextjs and Tailwind CSS</li>
            <li>Implemented modern animations and transitions for enhanced user engagement</li>
            <li>Optimized website loading speed and performance metrics</li>
            <li>Collaborated with design team to ensure pixel-perfect implementation</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h2 className="text-xl font-semibold">
              {" "}
              <span className="border-b-1 border-neutral-600">FullStack Developer</span>
            </h2>
            <div className="text-[#8f8f8f]">Nov 2024 - Jan 2025</div>
          </div>
          <div className="text-[#999999] ">Himansu Singh, Bengaluru</div>
          <div className="text-[#999999] mb-4">contact: +91 8971676606</div>
          <p className="text-[#e6e6e6] mb-3">
            Development of web application for stock indication. Worked on both frontend and backend components.
          </p>
          <ul className="list-disc list-inside text-[#999999] space-y-1">
            <li>Implemented RESTful APIs using Nextjs</li>
            <li>Developed responsive UI using Nextjs and Tailwind CSS</li>
            <li>Integrated with razerpay payments api to enable subscription model</li>
            <li>Optimized application performance and loading times</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h2 className="text-xl font-semibold">
              {" "}
              <span className="border-b-1 border-neutral-600">FullStack Developer</span>
            </h2>
            <div className="text-[#8f8f8f]">Apr 2024 - Oct 2024</div>
          </div>
          <div className="text-[#999999] ">Rahul Nath, Guwahati</div>
          <div className="text-[#999999] mb-4">contact: +91 7002706268</div>
          <p className="text-[#e6e6e6] mb-3">
            Built a full-stack word-guessing game utilizing JavaScript, React.js, Express.js, and various APIs,
            implementing interactive gameplay and real-time updates.
          </p>
          <p className="text-[#e6e6e6] mb-3">
            Designed and developed a backend in Express.js that records users daily journal entries, leverages GPT to
            recommend books based on their inputs, and provides summaries and key quotes upon selection.
          </p>
          <p className="text-[#e6e6e6] mb-3">
            Developed, optimized, and maintained the frontend of an event organizing web application using React.js
          </p>
          <ul className="list-disc list-inside text-[#999999] space-y-1">
            <li>Collaborated with designers to implement UI/UX designs</li>
            <li>Optimized websites for SEO and performance</li>
            <li>Provided technical support and troubleshooting</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h2 className="text-xl font-semibold">
              {" "}
              <span className="border-b-1 border-neutral-600">Frontend Developer Intern</span>{" "}
            </h2>
            <div className="text-[#8f8f8f]">Nov 2021 - Apr 2022</div>
          </div>
          <div className="text-[#999999] mb-4">
            <Link target="_blank" href="https://chainflux.com/" className="hover:text-yellow-200">
              Chainflux
            </Link>
            , Bengaluru
          </div>
          <p className="text-[#e6e6e6] mb-3">
            Contributed to frontend development and UI improvements for blockchain-based applications.
          </p>
          <ul className="list-disc list-inside text-[#999999] space-y-1">
            <li>Assisted in developing user interfaces for blockchain applications</li>
            <li>Implemented responsive designs using modern CSS frameworks</li>
            <li>Participated in code reviews and team meetings</li>
            <li>Learned about blockchain technology and its applications</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
