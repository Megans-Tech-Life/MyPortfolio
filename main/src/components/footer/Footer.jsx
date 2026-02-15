import { Heart } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__built">
            <span>Built with</span>
            <Heart className="footer__heart" color="#ef4444" fill="#ef4444" />
            <span>using React & Tailwind</span>
          </p>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Megan Jakims. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
