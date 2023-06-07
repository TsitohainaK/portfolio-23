import { useEffect, useState } from "react";
import { toogleTheme } from "../../services/ThemeService";
import { NavLink } from "react-router-dom";
import { Code, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const NavBar = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      toogleTheme(setCurrentTheme, true);
    }
  }, []);
  return (
    <div className="pt-2">
      <header className="navbar | p-2 px-4 flex justify-between items-center bg-[var(--content-bg)] rounded-full mx-2 shadow-md">
        <div className="me | flex items-center justify-start gap-1">
          <div className="icon | flex items-center text-[var(--color-main)]">
            <Code fontSize="medium" />
          </div>
          <div className="name | flex items-center font-mono font-medium text-lg">
            Tsitohaina
          </div>
        </div>
        <div className="link flex items-center gap-3">
          <div className="about">
            <NavLink to="/">about</NavLink>
          </div>
          <div className="works">
            <NavLink to="/">works</NavLink>
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
