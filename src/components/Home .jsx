import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="Home" className="home-div">
      <div className="homepage-content">
        <div
          className="homepage-content-text"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="title-home">find it!</h2>
          <p className="home-description">
            Find it allows you to search for commercial retailers near from your
            headquarters or an area where you planning to set a new factory.
          </p>
          <p className="home-description" style={{ marginBottom: "16px" }}>
            With find it you will have a better perspective about potential
            clients and areas for improvement in your supply chain.
          </p>
          <Stack spacing={2} direction="row">
            <Link className="nav-element" to="findit">
              <Button
                set
                sx={{ color: "white", backgroundColor: "green" }}
                variant="contained"
              >
                Find It!
              </Button>
            </Link>
            <Link className="nav-element" to="about">
              <Button
                set
                sx={{ color: "black", backgroundColor: "lightGray" }}
                variant="contained"
              >
                About
              </Button>
            </Link>
          </Stack>
        </div>
        <div
          className="homepage-content-img"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            alt=""
            src="https://www.pngall.com/wp-content/uploads/5/Google-Maps-Location-Mark.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
