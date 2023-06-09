import NavBar from "../../components/parts/NavBar";
import About from "./About";
import Works from "./Works";
import { Explore } from "@mui/icons-material";

type Props = {};

function Home({}: Props) {
  return (
    <div className="Home | relative w-full flex flex-col" id="me">
      <NavBar />
      <div className="about | relative flex gap-4 p-4 px-3 w-full mt-[3.3rem]">
        <About />
      </div>
      <h1 className="text-2xl mx-4 p-2 pb-5 text-[Montserrat] font-black"  id="projects">
        <Explore /> My Projects
      </h1>
      <div className="Projects | relative w-full px-5">
        <Works />
      </div>
    </div>
  );
}

export default Home;
