import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-icons-container">
          <a href="#1">
            <FacebookIcon />
          </a>
          <a href="#2">
            <InstagramIcon />
          </a>
          <a href="#3">
            <PinterestIcon />
          </a>
          <a href="#4">
            <YouTubeIcon />
          </a>
        </div>
        <div>© 2023 Find it!</div>
      </div>
    </div>
  );
}

export default Footer;
