import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Education() {
  return (
    <main className="min-h-screen bg-[#191919] text-white p-6 md:p-10 max-w-3xl mx-auto">
      <Link href="/" className="flex items-center text-[#999999] hover:text-white transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-8">Education</h1>

      <div className="space-y-10">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h2 className="text-xl font-semibold">BTech in Computer Science and Engineering</h2>
            <div className="text-[#8f8f8f]">2018 - 2022</div>
          </div>
          <div className="text-[#999999] mb-4">Barak Valley Engineering College</div>
          <p className="text-[#e6e6e6] mb-3">
            Completed a Bachelor of Technology degree with focus on computer science fundamentals, algorithms, data
            structures, and software development.
          </p>
          <div className="text-[#999999]">
            <div className="mb-2">
              <span className="font-medium">Relevant Coursework:</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Data Structures and Algorithms</li>
              <li>Database Management Systems</li>
              <li>Object-Oriented Programming</li>
              <li>Web Development</li>
              <li>Computer Networks</li>
              <li>Operating Systems</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h2 className="text-xl font-semibold">12th Boards </h2>
            <div className="text-[#8f8f8f]">2016 - 2017</div>
          </div>
          <div className="text-[#999999] mb-4">Kendriya Vidyalaya Silchar</div>
          <p className="text-[#e6e6e6] mb-3">PCM combined 75%</p>
          {/* <ul className="list-disc list-inside text-[#e6e6e6] space-y-3 mt-4">
            <li>
              <div className="inline-block font-medium">Full Stack Web Development</div>
              <div className="text-[#999999] mt-1">Udemy, 2020</div>
            </li>
            <li>
              <div className="inline-block font-medium">React - The Complete Guide</div>
              <div className="text-[#999999] mt-1">Udemy, 2021</div>
            </li>
            <li>
              <div className="inline-block font-medium">Advanced JavaScript Concepts</div>
              <div className="text-[#999999] mt-1">Coursera, 2022</div>
            </li>
          </ul> */}
        </div>
      </div>
    </main>
  );
}
