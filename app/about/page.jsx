import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      This is about page
      <Link href="/about/me/personal" >Personal</Link>
    </div>
  )
}

export default About
