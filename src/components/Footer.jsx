function Footer(){
    return (
    <footer className="w-full pt-10 pb-5">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h1 className="text-xl font-bold">Nathan Dinh</h1>
                    <p className="text-sm text-gray-400">Software Developer</p>
                </div>
                <nav className="flex flex-wrap gap-4">
                    {/* <a href="#about" className="hover:text-white">About</a>
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#skills" className="hover:text-white">Skills</a>
                    <a href="#contact" className="hover:text-white">Contact</a> */}
                </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://github.com/Nathan-Dinh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nathandinh67/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} Nathan Dinh. All Rights Reserved.
            </p>
          </div>
    </footer>
      )
}

export default Footer