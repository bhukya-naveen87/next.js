import React from 'react'

const page = () => {

  return (
    <div>
      {
        process.env.JWT_SECRET
      }
    </div>
  )
}

export default page
