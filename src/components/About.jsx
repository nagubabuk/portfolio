import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { personalData } from "../personalData";

const About = () => {
  return (
    <Element
      name="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('https://res.cloudinary.com/navcloudin/image/upload/v1732435362/BG-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-16 md:text-5xl text-indigo-400`}>
          {``} About Me {``}
        </h2>
        <div className="flex items-center justify-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full md:w-1/2">
            <div className="rounded-lg p-6 font-mono">
              <pre className="text-gray-300 whitespace-pre-wrap">
                <span className="text-gray-500">{"<p>"}</span>

                <div className="text-2xl font-bold mb-4 text-[#00ffff]">Hi There!</div>

                <div className="mb-4">
                  My name is <span className="text-green-500">{personalData.FullName}</span> and I specialize in web UI API Mobile Testing that utilizes technologies like{" "}
                  <span className="text-[#00ffff]">JAVA</span>, <span className="text-[#00ffff]">Selenium</span>, <span className="text-[#00ffff]">Jenkins</span>,{" "}
                  <span className="text-[#00ffff]">Appium</span>,<span className="text-[#00ffff]">RestAssured</span>,<span className="text-[#00ffff]">Jmeter</span>,and <span className="text-[#00ffff]">Playwright</span> etc.
                </div>

                <div className="mb-4">
                  I am a passionate Full Stack Developer with over 4 years of hands-on experience, specializing in frontend development (70%) and backend development (30%). I have a strong focus on building responsive, user-friendly interfaces using modern JavaScript frameworks like React, Angular, and also contribute to backend services, including APIs and database management.
                </div>

                <div className="mb-4">
                  In my free time, I enjoy exploring new frontend and backend technologies, enhancing my coding skills, and staying updated with the latest industry trends. Whether it's learning new design patterns or optimizing server-side logic, I always strive to improve my development capabilities across the stack.
                </div>

                {/* <div className="mb-4">
                  I also find time to engage in personal development activities and occasionally experiment with creative projects that challenge my problem-solving abilities.
                </div> */}

                <span className="text-gray-500">{"</p>"}</span>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default About;
