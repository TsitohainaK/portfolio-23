import {
  Circle,
  Close,
  Code,
  Description,
  Mouse,
  Rocket,
  RocketLaunch,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

interface IProject {
  status?: "done" | "working" | "rewrite" | string;
  name: string;
  imgSrc: string;
  desc: string;
  links: {
    project?: string;
    deployment?: string;
  };
  isLandscape?: boolean;
  isHere?: boolean;
}

function Work({ project }: { project: IProject }) {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [showHide, setShowHide] = useState<boolean>(true);
  const [isEntry, setIsEntry] = useState(false);
  useEffect(() => {
    if (isDescriptionShown && !isEntry)
      setTimeout(() => {
        setIsDescriptionShown(false);
      }, 500);
    // else setTimeout(() => {setS}, 10);
  }, [showHide]);

  return (
    <div className="relative w-full p-2 flex flex-col bg-[var(--content-bg)] rounded-md h-full overflow-hidden shadow-lg drop-shadow-md">
      <div className="name | text-[Montserrat] text-lg p-2 font-semibold flex items-center gap-1">
        <span
          className={`flex items-center ${
            project.status === "done"
              ? "text-emerald-600"
              : project.status === "rewrite"
              ? "text-orange-400"
              : "text-blue-400"
          }`}
        >
          <Circle fontSize="small" />
        </span>{" "}
        {project.name}
      </div>
      <div className="pic">
        <img
          src={project.imgSrc}
          alt="nnn"
          className={`w-full rounded-lg h-56 bg-[var(--content-bg-emphasis)] 
            ${project.isLandscape ? "object-cover" : "object-contain"}`}
          decoding="async"
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className="link pt-2 flex justify-between items-center">
        <div className="px-2 flex gap-4">
          {project.links.project ? (
            <a
              href={project.links.project}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code /> Code
            </a>
          ) : (
            <div className="text-neutral-400 hover:text-neutral-400 ">
              <Code /> Code
            </div>
          )}

          {project.links.deployment && !project.isHere ? (
            <a
              href={project.links.deployment}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <RocketLaunch /> Visit
            </a>
          ) : project.isHere ? null : (
            <div className="text-neutral-400 hover:text-neutral-400 cursor-default">
              <RocketLaunch /> Visit
            </div>
          )}
        </div>
        <button
          className="border text-[var(--color-main)] border-[var(--color-main)] px-2 rounded-xl py-2 text-sm"
          onClick={() => {
            setIsDescriptionShown(true);
            setShowHide(true);
            setIsEntry(true);
          }}
        >
          Description
        </button>
      </div>
      {isDescriptionShown ? (
        <div
          className={`info | opacity-1 animate-show ${
            showHide ? "" : "animate-hide"
          } p-3 absolute top-0 left-0 whitespace-pre-wrap w-full bg-slate-700 backdrop-blur-lg bg-opacity-50 h-full text-left`}
        >
          {project.desc}
          <button
            className="absolute bottom-2 right-3 border text-[var(--color-main)] border-[var(--color-main)] px-2 rounded-xl py-2 text-sm"
            onClick={() => {
              setShowHide(false);
              setIsEntry(false);
            }}
          >
            <Close fontSize="small" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Work;
