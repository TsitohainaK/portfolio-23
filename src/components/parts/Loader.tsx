import GraphicEqIcon from '@mui/icons-material/GraphicEq'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className="icon text-6xl text-rose-600 animate-pulse">
        <GraphicEqIcon fontSize='inherit'/>
      </div>
    </div>
  )
}

export default Loader