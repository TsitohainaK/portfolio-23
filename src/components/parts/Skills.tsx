import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      },{
        threshold: 0.4,
      }
    );
    const hiddenElements = document.querySelectorAll(".not-show");

    hiddenElements.forEach((hiddenElement) => {
      observer.observe(hiddenElement);
    });
  }, []);
  return (
    <div
      className="tech grid grid-cols-5 w-full gap-2 place-items-center content-center py-2 pb-4"
      id="skills"
    >
      <img
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="git"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
        alt="git"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="react"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
        alt="vue"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        alt="tailwinf"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
        alt="nodejs"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg"
        alt="nestjs"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/74220b6f8389ad5c5d9f68b2029d91460de2b374/icons/file_type_light_prisma.svg"
        alt="prisma"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
        alt="mongodb"
        width="40"
        height="40"
        className="not-show"
      />
      <img
        src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
        alt="postgresql"
        width="40"
        height="40"
        className="not-show"
      />
    </div>
  );
}

export default Skills;
