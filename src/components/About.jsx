import React from "react";
import Service from "./Services";
import Team from "./Team";
import Footer from "./Footer";

function About() {
  return (
    <div className="about-page">
      <div className="about-sec-1">
        <div
          className="about-sec-1-text"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <h1>About us</h1>
          <p>
            Commodo do Lorem sit est enim. Labore officia do tempor enim dolor
            irure reprehenderit. Lorem et ullamco sit culpa in pariatur et. Ad
            elit veniam anim nisi in aliqua culpa. Officia veniam nulla sunt ut
            veniam commodo aliquip et laboris.
          </p>
          <p>
            Aute nisi sunt nulla sint ea anim exercitation minim fugiat magna.
            Aliquip elit ad sunt quis velit velit et irure aute exercitation
            proident. Deserunt aliquip mollit reprehenderit qui sit amet ad id
            est. Laboris pariatur minim nostrud pariatur do laboris aliqua
            consequat non sint. Elit laborum quis qui fugiat sit deserunt
            commodo consectetur et adipisicing. Exercitation aute laboris sint
            eiusmod et.
          </p>
          <p>
            Commodo do Lorem sit est enim. Labore officia do tempor enim dolor
            irure reprehenderit. Lorem et ullamco sit culpa in pariatur et. Ad
            elit veniam anim nisi in aliqua culpa. Officia veniam nulla sunt ut
            veniam commodo aliquip et laboris.
          </p>
        </div>
        <div
          className="about-sec-1-img"
          data-aos-duration="1000"
          data-aos="fade-left"
        >
          <img
            src="https://cdn.wccftech.com/wp-content/uploads/2017/03/Google-Maps.jpg"
            alt="about-img"
          />
        </div>
      </div>
      <Service />
      <Team />
      <Footer />
    </div>
  );
}

export default About;
