import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/idl808/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-3xl"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/idan93l"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className="text-3xl"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/idan.93lev"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook className="text-3xl"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/idan_lev"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="text-3xl"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.tiktok.com/@idl350"
        target="_blank"
        rel="noreferrer"
      >
        <BsTiktok className="text-3xl"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
