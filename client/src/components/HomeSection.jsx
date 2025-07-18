import React from "react";
import "../CompStyle/homeSection.scss";
import { RiPokerClubsLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="cards">
        <div className="card">
          <IoPeopleOutline className="logo" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software helps national & local
            organizations streamline operations & payments.
          </p>
        </div>
        <div className="card">
          <BsBuildings className="logo" />
          <h3>National Associations</h3>
          <p>
            For committees or umbrella organizations managing multiple
            independent groups, we offer integrated payments.
          </p>
        </div>
        <div className="card">
          <RiPokerClubsLine className="logo" />
          <h3>Clubs And Groups</h3>
          <p>
            Our club management software supports everything from small hobby
            clubs to large federated communities.
          </p>
        </div>
      </div>

      <div className="highlight-section">
        <div className="illustration">
          <img
            src="/Assets/HomeImage.svg"
            alt="illustration"
            className="mock-illustration "
          />
        </div>
        <div className="content">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend sapien eu blandit accumsan. Ut vehicula erat sit amet
            libero malesuada placerat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed eleifend sapien eu blandit accumsan. Ut
            vehicula erat sit amet libero malesuada.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
