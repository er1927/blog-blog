
import Link from "next/link"
import { FaGithub, FaLinkedin, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold trext-white grid place-content-center mb-2 md:mb-0"> 
            <Link href="https://er1927.github.io/personal-portfolio/#about" target="_blank"
                  className="text-white/90 no-underline hover:text-white">
                    About
            </Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                <Link className="text-white/90 hover:text-white" href="https://github.com/er1927" target="_blank">
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/elizabethrobertswebdeveloper/" target="_blank">
                    <FaLinkedin />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://er1927.github.io/personal-portfolio/" target="_blank">
                    <FaLaptop />
                </Link>
            </div>  
        </div>
    </nav>
  );
}
