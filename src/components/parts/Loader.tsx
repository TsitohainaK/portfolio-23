import { Code } from '@mui/icons-material'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className="icon text-6xl text-[var(--color-main)] animate-pulse">
        <Code fontSize='inherit'/>
      </div>
    </div>
  )
}

export default Loader