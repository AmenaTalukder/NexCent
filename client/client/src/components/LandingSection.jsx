import React from "react";
import "../CompStyle/landingsec.scss";

import image1 from "../Assets/1st.jpg";
import image2 from "../Assets/2nd.jpg";
import image3 from "../Assets/3rd.jpg";

const LandingPage = () => {
  const logos = [
    "/Assets/logo1.png",
    "/Assets/logo2.png",
    "/Assets/logo3.png",
    "/Assets/logo4.png",
    "/Assets/logo5.png",
    "/Assets/logo6.png",
    "/Assets/logo7.png"
  ];

  const features = [
    {
      title: "Creating Streamlined Safeguarding Processes with OnePlan",
      image: image1,
      bgColor: "blue"
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: image2,
      bgColor: "yellow"
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: image3,
      bgColor: "green"
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container heroLand-content">
          <div className="tesla-logo">
            <div className="logo-container">
              <svg viewBox="0 0 100 40" className="tesla-icon">
                <path d="M0 0h7v40H0V0zm13 0h7l8 15 8-15h7L32 25v15h-7V25L13 0zm38 0h32v6H58v9h23v6H58v13h-7V0z" />
              </svg>
            </div>
          </div>

          <div className="content-section">
            <p className="description">
              Modern and efficient project management tools successfully
              streamlined Sprint, and you will achieve long and fast
              development. First, we will create a dynamic and flexible basic
              structure...
            </p>

            <div className="stack-section">
              <h2 className="stack-title">The Stack</h2>
              <p className="stack-description">
                We can develop very easily for you now.
              </p>
              <div className="partner-logos">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="landing-logo"
                  />
                ))}
                <span className="more-link">Meet all customers →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Caring is the new marketing</h2>
            <p className="section-subtitle">
              The Maxxer blog is the best place to read about the latest
              membertech insights.
            </p>
          </div>

          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-image ${item.bgColor}`}>
                  <div className="icon-container">
                    <img src={item.image} alt={`feature-${index}`} />
                  </div>
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="card-link">Read more →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
