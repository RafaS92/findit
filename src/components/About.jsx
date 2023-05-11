import React from 'react'
import Service from "./Services"
import Team from "./Team"


function About() {
  return (
    <>
        <div className='about-sec-1'>
            <div className='about-sec-1-text'>
                <h2>About us</h2>
                <p>Commodo do Lorem sit est enim. Labore officia do tempor enim dolor irure reprehenderit. Lorem et ullamco sit culpa in pariatur et. Ad elit veniam anim nisi in aliqua culpa. Officia veniam nulla sunt ut veniam commodo aliquip et laboris.</p>
                <p>Aute nisi sunt nulla sint ea anim exercitation minim fugiat magna. Aliquip elit ad sunt quis velit velit et irure aute exercitation proident. Deserunt aliquip mollit reprehenderit qui sit amet ad id est. Laboris pariatur minim nostrud pariatur do laboris aliqua consequat non sint. Elit laborum quis qui fugiat sit deserunt commodo consectetur et adipisicing. Exercitation aute laboris sint eiusmod et.</p>
                <p>Commodo do Lorem sit est enim. Labore officia do tempor enim dolor irure reprehenderit. Lorem et ullamco sit culpa in pariatur et. Ad elit veniam anim nisi in aliqua culpa. Officia veniam nulla sunt ut veniam commodo aliquip et laboris.</p>
            </div>
            <div className='about-sec-1-img'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="about-img" />
            </div>
        </div>
        <Service />
        <Team />
    </>
  )
}

export default About