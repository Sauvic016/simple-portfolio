import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#191919] text-white p-6 md:p-10 max-w-3xl mx-auto">
      <Link href="/" className="flex items-center text-[#999999] hover:text-white transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">ReviewSnap {"(In Progress)"}</h2>
          <p className="text-[#e6e6e6] mb-3">
            A platform for users to leave and read reviews for various products and services.
          </p>
          <div className="text-sm text-[#999999] mb-2">
            Technologies: Next.js,Express.js,NextAuth,zod Typescript,Tailwind CSS, Postgress, Prisma
          </div>
          <Link
            href={`${process.env.NEXT_PUBLIC_REVIEWSNAP_URL}`}
            target="_blank"
            className="text-[#2ea8ff] hover:underline"
            rel="noreferrer"
          >
            View Project →
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Ezflights</h2>
          <p className="text-[#e6e6e6] mb-3">
            A flight booking application that helps users find and book flights at the best prices.
          </p>
          <div className="text-sm text-[#999999] mb-2">Technologies: React, Node.js, MongoDB</div>
          <Link
            href={`${process.env.NEXT_PUBLIC_EZFLIGHTS_URL}`}
            target="_blank"
            className="text-[#2ea8ff] hover:underline"
            rel="noreferrer"
          >
            View Project →
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">TurtleAlgo</h2>
          <p className="text-[#e6e6e6] mb-3">A stock indicating platform</p>
          <div className="text-sm text-[#999999] mb-2">Technologies: Next.js, Nextauth , Supabase</div>
          <Link
            href={`${process.env.NEXT_PUBLIC_TURTLEALGO}`}
            target="_blank"
            className="text-[#2ea8ff] hover:underline"
            rel="noreferrer"
          >
            View Project →
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Hexad Engineering LLP Website</h2>
          <p className="text-[#e6e6e6] mb-3">Company website focusing on user experience and performance</p>
          <div className="text-sm text-[#999999] mb-2">Technologies: Nextjs </div>
          <Link
            href={`${process.env.NEXT_PUBLIC_HEXADLLP_URL}`}
            target="_blank"
            className="text-[#2ea8ff] hover:underline"
            rel="noreferrer"
          >
            View Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
