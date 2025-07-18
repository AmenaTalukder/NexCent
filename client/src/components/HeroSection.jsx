import "../CompStyle/HeroSection.scss";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Lessons and insights <br />
          <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
      <div className="hero-image">
        <img src="/Assets/dashboard.svg" alt="Illustration" />
      </div>
    </section>
  );
};
export default HeroSection;
