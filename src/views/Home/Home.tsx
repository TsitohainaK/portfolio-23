import NavBar from "../../components/parts/NavBar";
import me from "../../assets/me-lol.jpg";
import {
  Facebook,
  FacebookRounded,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
type Props = {};

function Home({}: Props) {
  return (
    <div className="Home | relative min-h-screen bg-[var(--root-bg)]">
      <NavBar />
      <main className="flex gap-4 p-4 px-3 w-full h-[calc(100vh-3.3rem)]">
        <section className="flex w-8/12 h-full justify-between items-start rounded-xl bg-[var(--content-bg)] p-4 flex-col">
          <div className="who | mt-16 flex flex-col gap-4">
            <div className="text-5xl font-[Montserrat] font-bold italic pl-10 ">
              Hey, I'm Tsitohaina,
              <br /> A javascript developper
            </div>
            <div className="pl-10">
              As a developer, I thrive on the challenge of solving complex
              problems <br />
              and enjoy collaborating with teams to deliver high-quality <br />
              applications that exceed expectations.
            </div>
            <div className="pl-10">
              Javascript, Typescript are my go-to language
              <br />
              I use ReactJs as front-end framework
              <br />
              NodeJs and Express or NestJs for the backend.
            </div>
          </div>
          <div className="contact | mb-10">
            <div className="pl-10 w-full flex items-center justify-start gap-4">
              <a href="mailto:tsitohaina.pro@gmail.com" target="_blank">
                <button className="bg-[var(--color-main)] p-3 text-white font-bold rounded-full px-4 text-sm">
                  CONTACT ME
                </button>
              </a>

              <div className="bg-[var(--root-color)] p-2 rounded-full">
                <a
                  href="http://github.com/TsitoUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <GitHub fontSize="medium" />
                </a>
              </div>
              <div className="bg-[var(--root-color)] p-2 rounded-full">
                <a
                  href="http://github.com/TsitoUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <LinkedIn fontSize="medium" />
                </a>
              </div>
              <div className="bg-[var(--root-color)] p-2 rounded-full">
                <a
                  href="http://github.com/TsitoUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <FacebookRounded fontSize="medium" />
                </a>
              </div>
              <div className="bg-[var(--root-color)] p-2 rounded-full">
                <a
                  href="http://github.com/TsitoUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--root-bg)] hover:text-[var(--root-bg)]"
                >
                  <Instagram fontSize="medium" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-4/12">
          <img
            src={me}
            alt="me hah"
            className="w-full object-cover rounded-xl"
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
