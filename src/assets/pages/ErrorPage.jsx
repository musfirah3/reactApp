import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  
  return (
  <div className="container text-center mt-5">
    <h2 className='text-success'>404</h2>
    <h4 className='text-success'>UH OH! You're lost.</h4>
    <p className='text-secondary'>The page you are looking for does not exist.How you get here is a mystery.But you can click the button to go back the homepage.</p>
    <Link to='/'><button className='text-decoration-none btn btn-outline-success'>Home</button></Link>
  </div>
  )
}

export default ErrorPage