import '../css/NotFound.css'

const NotFound = () => {
  return (
    <div className='notFound'>
        <img src="/movie.png" alt="Not found Icon" className="notFoundIcon" />
        <h2 className="notFoundMsg">404 | Page Not Found!</h2>
    </div>
  )
}

export default NotFound
