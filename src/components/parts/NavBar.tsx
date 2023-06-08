import { useEffect, useState } from "react";
import { toogleTheme } from "../../services/ThemeService";
import { Code, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const NavBar = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      toogleTheme(setCurrentTheme, true);
    } else {
      toogleTheme(setCurrentTheme);
    }
  }, []);
  return (
    <div className="pt-2 px-1 fixed top-0 w-full z-50">
      <header className="navbar | p-2 px-5 flex justify-between items-center rounded-full mx-2 shadow-md blured-content-bg">
        <div className="me | flex items-center justify-start gap-1">
          <div className="icon | flex items-center text-[var(--color-main)]">
            <Code fontSize="medium" />
          </div>
          <div className="name | flex items-center font-mono font-medium text-lg">
            Tsitohaina<span className="hidden md:block ml-2">Kantonirina</span>
          </div>
        </div>
        <div className="link flex items-center gap-3">
          <div className="about">
            <a href="#me">about</a>
          </div>
          <div className="works">
            <a href="#projects">works</a>
          </div>
          <div className="switcher">
            <button
              onClick={() => toogleTheme(setCurrentTheme)}
              className="flex items-center"
            >
              {currentTheme === "light" ? (
                <DarkModeOutlined fontSize="small" />
              ) : (
                <LightModeOutlined fontSize="small" />
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
