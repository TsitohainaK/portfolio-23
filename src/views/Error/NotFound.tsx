import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <p>404 error: Page Requested Not Found</p>
        <p>return <Link aria-label="home" to="/">home</Link></p>
      </div>
    </div>
  )
}

export default NotFound