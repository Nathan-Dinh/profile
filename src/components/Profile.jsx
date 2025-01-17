import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';
import Porfile from '../assets/Profile.png';
import pdf from '../assets/resume.pdf';

function Profile() {
  return (
    <div className="w-full mx-auto flex md:flex-row flex-col-reverse">
      <div className="w-full">
        <div className="w-[85%]">
          <div className="flex text-2xl">
            <h2 className=" font-semibold text-white mb-4 ">
              Hey, Nathan here
            </h2>
            <div className="hover:animate-handshake">👋</div>
          </div>
          <p> Software developer based in canada 🇨🇦</p>
          <br />
          <p>
            {' '}
            I'm deeply passionate about programming and development, constantly
            striving to grow and learn.
          </p>
        </div>
        <div className="mt-6 flex">
          <a
            href="https://github.com/Nathan-Dinh"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 cursor-pointer relative group hover:scale-110 transition-all "
          >
            {/* Bottom Layer: Medium Gray */}
            <FiGithub className="absolute top-0 left-0 w-7 h-auto text-gray-500 opacity-75 blur-sm group-hover:opacity-75 group-hover:blur-lg group-hover:[filter:brightness(1.3)] transition-all" />
            {/* Top Layer: Light Orange */}
            <FiGithub className="absolute top-0 left-0 w-7 h-auto text-orange-300 opacity-75 [filter:brightness(1.2)] group-hover:opacity-90 group-hover:blur-xl group-hover:[filter:brightness(1.4)] transition-all" />
            {/* Main Icon */}
            <FiGithub className="relative w-7 h-auto text-orange-500 group-hover:[filter:brightness(1.4)] transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathandinh67/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 cursor-pointer relative group hover:scale-110 transition-all"
          >
            {/* Bottom Layer: LinkedIn Blue Glow */}
            <FiLinkedin className="absolute top-0 left-0 w-7 h-auto text-[#0077B5] opacity-40 blur-sm group-hover:opacity-60 group-hover:blur-md group-hover:[filter:brightness(1.2)] transition-all" />

            {/* Top Layer: Lighter LinkedIn Blue */}
            <FiLinkedin className="absolute top-0 left-0 w-7 h-auto text-[#0077B5] opacity-60 [filter:brightness(1.1)] group-hover:opacity-80 group-hover:blur-lg group-hover:[filter:brightness(1.3)] transition-all" />

            {/* Main Icon */}
            <FiLinkedin className="relative w-7 h-auto text-[#0077B5] group-hover:[filter:brightness(1.4)] transition-all" />
          </a>
          <a
            href={pdf}
            target="_blank"
            className="w-40 h-10 mr-5 bg-[#020610] cursor-pointer text-gray-400 hover:text-white rounded-md flex flex-row items-center justify-center border-2 border-[#1E2A34] hover:border-[#1E2A34] focus:ring-[#1E2A34] transition-all ease-in-out duration-300 transform"
          >
            <p className="font-bol">Resume</p>
            <div className="ml-3">
              <FaFileDownload className="w-5 h-auto" />
            </div>
          </a>
        </div>
      </div>
      <div className="w-2/5 mb-5">
        <img
          src={Porfile}
          alt="Profile"
          className="w-full h-auto rounded-md shadow-2xl border-4 border-[#1E2A34]"
        />
      </div>
    </div>
  );
}

export default Profile;
