import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, content, href, demo }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{content}</p>
        <br />
        {demo ? (
          <div className="w-[30%] flex justify-between flex-row">
            <a
              className="text-red hover:opacity-50 transition duration-500"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="text-3xl" />
            </a>
            <a
              className="text-blue hover:opacity-50 transition duration-500"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayCircleFill className="text-3xl" />
            </a>
          </div>
        ) : (
          <a
            className="text-red hover:opacity-50 transition duration-500"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-3xl" />
          </a>
        )}
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Developed 7 Full Stack and Front End personal projects using React,
          Javascript, Typescript, Node.js, Nest.js, Redux, MongoDB, GraphQL,
          Tailwind, HTML, CSS.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Sequencer"
            content="Responsive platform that allows multiple users to make music together in real-time through a beat sequencer."
            href="https://github.com/idan93l/sequencer-front"
            demo="https://sequencer.onrender.com"
          />
          <Project
            title="Friend-Ship"
            content="Registration with validation. Uploading image to profile and posts. likes and comments. Adding friends and visiting their profile pages. Responsive, dark/light mode."
            href="https://github.com/idan93l/friend-ship"
            demo=""
          />

          {/* ROW 2 */}
          <Project
            title="CaRent"
            content="Fully responsive car rental app."
            href="https://github.com/idan93l/cars-app"
            demo=""
          />
          <Project
            title="Launchpad"
            content="Responsive playable, customizable, sample-based music Launchpad."
            href="https://github.com/idan93l/music-launchpad"
            demo="https://music-launchpad.netlify.app"
          />
          <Project
            title="User-Management"
            content="Responsive user management app where the admin can activate/deactivate any user. Double-clicking a user opens his profile page."
            href="https://github.com/idan93l/user-management-app"
            demo=""
          />

          {/* ROW 3 */}
          <Project
            title="Snake"
            content="Christmas-themed snake game."
            href="https://github.com/idan93l/christmas_snake"
            demo="https://christmas-snake.netlify.app"
          />
          <Project
            title="Portfolio"
            content="Responsive and clean looking portfolio made from scratch."
            href="https://github.com/idan93l/reactive-portfolio"
            demo=""
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
