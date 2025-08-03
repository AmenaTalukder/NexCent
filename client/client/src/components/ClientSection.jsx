import "../CompStyle/clientSection.scss";

const ClientSection = () => {
  const clientLogos = [
    "/Assets/logo1.png",
    "/Assets/logo2.png",
    "/Assets/logo3.png",
    "/Assets/logo4.png",
    "/Assets/logo5.png",
    "/Assets/logo6.png",
    "/Assets/logo7.png"
  ];

  return (
    <section className="client-section">
      <div className="clients">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="logo-grid">
          {clientLogos.map((logo, index) => (
            <div className="logoSec">
              <img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="community-section">
        <h2>
          Manage your entire community
          <br />
          in a single system
        </h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
    </section>
  );
};

export default ClientSection;
