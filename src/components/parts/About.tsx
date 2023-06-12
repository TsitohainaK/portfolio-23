import me from "../../assets/me-lol.jpg";
import {
  FacebookRounded,
  FileDownloadOutlined,
  GitHub,
  KeyboardArrowDown,
  LinkedIn,
} from "@mui/icons-material";


function addEmailToClipBoard() {
  let mock: HTMLTextAreaElement | null = document.createElement("textarea");
  mock.value = "tsitohaina.pro@gmail.com";

  mock.select();
  mock.setSelectionRange(0, 23);

  // used this cause the clipboard ain't working
  document.execCommand("copy");
  mock = null;
}
function About() {
  return (
    <>
      <div className="flex w-full md:w-8/12 absolute md:relative left-0 px-3 md:px-1 h-full max-h-[calc(100vh-6rem)]">
        <section className="flex w-full z-40 justify-between md:justify-around items-start rounded-xl flex-col drop-shadow-md shadow-md bg-slate-900 bg-opacity-50 md:bg-[var(--content-bg)] md:bg-opacity-100 whitespace-pre-wrap h-full md:min-h-[calc(100vh-6rem)]">
          <div className="who | flex flex-col gap-4 text-white md:text-[var(--root-color)] px-4 pt-12 md:pt-5">
            <div className="relative text-3xl md:text-4xl lg:text-5xl font-[Montserrat,Roboto,sans-serif] font-black stroke-2 md:pl-6">
              <p className="absolute text-sm -top-5 font-thin text-neutral-400 pl-1">
                about me
              </p>
              Hey, I'm{" "}
              <span className="myname | text-[var(--color-main)] italic">
                Tsitohaina
              </span>
              ,
              <br />A javascript developper.
            </div>
            <div className="md:px-4 animate-blur-in">
              As a developper, I thrive on the challenge of solving complex
              problems and enjoy collaborating with teams to deliver
              high-quality applications that exceed expectations.
            </div>
          </div>
          <div className="contact | p-4 animate-blur-in">
            <div className="complement | p-2 pb-5 text-white md:md:text-[var(--root-color)] md:pl-4">
              Javascript, Typescript are my go-to languages, I use ReactJs as
              front-end framework, NodeJs and Express or NestJs for the backend.
              Also I'm an IT student at "Institut Superieur Polytechnique de
              Madagascar"
            </div>
            <div
              className=" w-full flex items-center justify-start gap-2 md:gap-3 md:pl-4"
              title="tsitohaina.pro@gmail.com"
            >
              <a
                href="mailto:tsitohaina.pro@gmail.com"
                target="_blank"
                className="z-10"
              >
                <button
                  className="bg-[var(--color-main)] p-3 text-white font-bold rounded-full px-4 text-sm"
                  onClick={() => addEmailToClipBoard()}
                >
                  CONTACT ME
                </button>
              </a>
              <div className="bg-[var(--root-color)] p-[0.65rem] rounded-full flex items-center justify-center">
                <a
                  href="http://github.com/TsitoUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <GitHub fontSize="medium" />
                </a>
              </div>
              <div className="bg-[var(--root-color)] p-[0.65rem] rounded-full flex items-center justify-center">
                <a
                  href="http://linkedin.com/in/tsitohaina-rakotoarimanana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <LinkedIn fontSize="medium" />
                </a>
              </div>
              <div className="bg-[var(--root-color)] p-[0.65rem] rounded-full flex items-center justify-center">
                <a
                  href="http://facebook.com/profile.php?id=100084120922933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <FacebookRounded fontSize="medium" />
                </a>
              </div>
              <div
                className="bg-[var(--root-color)] p-[0.65rem] rounded-full flex items-center justify-center"
                title="Download my resume"
              >
                <a
                  href='/CV_REACT_NODE_Tsitohaina_RAKOTOARIMANANA.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                  title="Download my resume"
                >
                  <FileDownloadOutlined fontSize="medium" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex w-full z-30 md:w-4/12 shadow-md max-h-[calc(100vh-6rem)] min-h-[calc(100vh-6rem)] overflow-hidden rounded-xl drop-shadow-md">
        <img
          src={me}
          alt="me hah"
          className="w-full object-cover rounded-xl"
          decoding="async"
          loading="eager"
          draggable={false}
        />
      </section>
      <div className="absolute -bottom-2 left-[50%] z-50  animate-bounce">
        <a href="#projects" className="p-2 ">
          <KeyboardArrowDown />
        </a>
      </div>
    </>
  );
}

export default About;
