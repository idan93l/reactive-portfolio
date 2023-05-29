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
          <div className="w-[40%] flex justify-between flex-row">
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
          Developed 10 Full Stack and Front End personal projects using React,
          Javascript, Typescript, Next.js, Node.js, Nest.js, Redux, Socket.io,
          OpenAI, MongoDB, GraphQL, Tailwind, HTML, CSS.
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
          <Project
            title="AI-Tshirt"
            content="Responsive app that allows the user to customize a 3D T-shirt model with the power of AI."
            href="https://github.com/idan93l/threejs_product"
            demo="https://aitshirt.onrender.com/"
          />
          <Project
            title="Sequencer"
            content="Responsive platform that allows multiple users to make music together in real-time through a beat sequencer."
            href="https://github.com/idan93l/sequencer-front"
            demo="https://sequencer.onrender.com"
          />
          <Project
            title="To-do-list"
            content="Responsive to do list app with the Ability to login to firebase and save the list data to firestore.
            The list items can be added / toggled / edited / deleted.
            Has dark / light mode themes.
            "
            href="https://github.com/idan93l/todo-app-next"
            demo="https://todo-app-next-ecru.vercel.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Job-search"
            content="Responsive job search app with pagination."
            href="https://github.com/idan93l/react_native_jobs"
          />
          <Project
            title="CaRent"
            content="Fully responsive car rental app."
            href="https://github.com/idan93l/cars-app"
            demo=""
          />
          <Project
            title="Friend-Ship"
            content="Registration with validation. Uploading image to profile and posts. likes and comments. Adding friends and visiting their profile pages. Responsive, dark/light mode."
            href="https://github.com/idan93l/friend-ship"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
