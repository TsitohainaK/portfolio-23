import { useContext } from 'react';
import { SongMassive } from '../../types/Song'
import { publicUrl } from '../../config/api'
import defaultSongArtwork from "../../assets/default-artwork.png";
import songService from '../../services/song.service';
import { SongContext } from '../../context/songContext';
import { SongStateContext } from '../../context/songStateContext';
import PlayArrow from "@mui/icons-material/PlayArrowOutlined";
import Pause from "@mui/icons-material/Pause";
type Props = {
  song: SongMassive,
  isResponsive: boolean
}

function SongCard({ song, isResponsive = false }: Props) {
  const songc = useContext(SongContext);
  const state = useContext(SongStateContext);
  return (
    <div className={`song | w-max flex flex-col items-center justify-center text-ellipsis whitespace-break-spaces bg-slate-900 rounded-lg p-2 hover:cursor-pointer`}>
      <div className="artwork"
      >
        <div className="ctn artwork w-48 lg:w-48 h-48 lg:h-48 aspect-square bg-emerald-500 rounded-xl relative flex items-center justify-center overflow-hidden">
          <img
            src={song.artwork ? publicUrl + "/artwork/" + song.artwork : defaultSongArtwork}
            className="image | max-w-full w-full aspect-square object-cover"
            alt={`${song.artist} - ${song.title} artwork`}
            decoding="async"
            loading="lazy"
            draggable={false}
          />
          <button
            className="button | absolute lg:top-[38%] top-[38%] lg:left-[38%] left-[38%] text-5xl flex items-center justify-center bg-transparent hover:bg-rose-600 transition-all delay-100 hover:bg-opacity-70 hover:backdrop-blur-sm rounded-full p-1"
            onClick={() => songService.playThis(song, state, songc)}
            aria-label={`play-pause ${song.artist} ${song.title}`}
          >
            {(state?.isPlaying && song.filename === songc?.currentSong?.filename) ? <Pause fontSize="inherit" /> : <PlayArrow fontSize="inherit" />}
          </button>
        </div>
      </div>
      <div className="flex flex-col p-2 w-48">
        <div className="title font-bold">
          {song.title}
        </div>
        <div className="artist text-neutral-400 text-sm ">
          {song.artist}
        </div>
      </div>
    </div>
  )
}

export default SongCard