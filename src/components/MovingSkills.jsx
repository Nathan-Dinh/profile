import { IoLogoJavascript, IoLogoHtml5  } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { DiMysql } from "react-icons/di";
import { SiFastify } from "react-icons/si";

function MovingSkills(){
    return(
<div className="relative flex overflow-hidden group bg-[#020610]">
  <div className="animate-marquee group-hover:pause flex py-6">
    {[
      { icon: <IoLogoJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaReact />, label: "React" },
      { icon: <FaCss3Alt />, label: "CSS" },
      { icon: <IoLogoHtml5 />, label: "HTML" },
      { icon: <SiFastify />, label: "Fastify" },
      { icon: <DiMysql />, label: "MySQL" },
      { icon: <PiFileCSharp />, label: "CSharp" },
    ].map((item, index) => (
      <div
        key={index}
        className="text-2xl mx-4 flex items-center"
      >
        <span>
          {item.icon}
        </span>
        <span>
          <p className="ml-3">{item.label}</p>
        </span>
      </div>
    ))}
  </div>

  <div className="absolute top-0 flex animate-marquee2 group-hover:pause py-6">
    {[
      { icon: <IoLogoJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaReact />, label: "React" },
      { icon: <FaCss3Alt />, label: "CSS" },
      { icon: <IoLogoHtml5 />, label: "HTML" },
      { icon: <SiFastify />, label: "Fastify" },
      { icon: <DiMysql />, label: "MySQL" },
      { icon: <PiFileCSharp />, label: "CSharp" },
    ].map((item, index) => (
      <div
        key={`repeat-${index}`}
        className="text-2xl mx-4 flex items-center "
      >
        <span>
          {item.icon}
        </span>
        <span>
          <p className="ml-3">{item.label}</p>
        </span>
      </div>
    ))}
  </div>
</div>

    )
}

export default MovingSkills