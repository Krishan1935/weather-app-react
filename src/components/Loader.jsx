import "./Loader.css"

import React from 'react'

const Loader = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center gap-4">
        <div className="spinner"></div>
        <p className="text-white font-semibold text-xl">Loading...</p>
    </div>
  )
}

export default Loader