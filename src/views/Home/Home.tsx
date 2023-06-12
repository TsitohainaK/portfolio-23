import NavBar from "../../components/parts/NavBar";
import About from "./About";
import Works from "./Works";
import { AutoFixHigh, Explore, MilitaryTech, PanToolSharp } from "@mui/icons-material";

type Props = {};

function Home({}: Props) {
  return (
    <div className="Home | relative w-full flex flex-col" id="me">
      <NavBar />
      <div className="about | relative flex gap-4 p-4 px-3 w-full mt-[3.3rem]">
        <About />
      </div>
      <h1
        className="text-2xl mx-4 p-2 pb-5 text-[Montserrat] font-black"
        id="projects"
      >
        <Explore /> My Projects
      </h1>
      <div className="Projects | relative w-full px-5">
        <Works />
      </div>
      <h1
        className="text-2xl mx-4 p-2 pb-5 text-[Montserrat] font-black"
        id="projects"
      >
        <AutoFixHigh /> Skills
      </h1>
      <div className="tech flex w-full gap-1 items-center justify-center py-2 pb-4">
        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
          alt="git"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          alt="react"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
          alt="vue"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="tailwinf"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          alt="nodejs"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg"
          alt="nestjs"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/74220b6f8389ad5c5d9f68b2029d91460de2b374/icons/file_type_light_prisma.svg"
          alt="prisma"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          alt="mongodb"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
          alt="postgresql"
          width="40"
          height="40"
        />
      </div>
    </div>
  );
}

export default Home;
