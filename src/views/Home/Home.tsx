import NavBar from "../../components/parts/NavBar";
import About from "../../components/parts/About";
import Works from "../../components/parts/Works";
import { AutoFixHigh, Explore } from "@mui/icons-material";
import Skills from "../../components/parts/Skills";


function Home() {
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
      <Skills />
    </div>
  );
}

export default Home;
