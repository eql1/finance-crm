import React from "react";

import "./home.scss";

import HomeHeader from "../HomeHeader/HomeHeader";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="container">
            <HomeHeader />
            <div className="hero__wrapper">
              <div className="hero__content">
                <div className="hero__header">
                  <h1>COMFORTABLE CRM + DATA + YOU = HAPPIER CUSTOMERS.</h1>
                </div>
                <div className="hero__desc">
                  Discover new opportunities to build better connection with
                  your customers.
                </div>
                <a className="hero__action-btn">Start for free</a>
                <div className="hero__slider">
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="product" className="product__section">
          <div className="container">
            <div className="product__wrapper">
              <div className="product__col-1">
                <div className="product__row-1">
                  <h1>What is CRM?</h1>
                </div>
              </div>
              <div className="product__col-2">
                <div className="product__row-1">
                  <p>
                    <u>CRM</u> stands for “Customer Relationship Management” and
                    is a software system that helps business owners easily track
                    all communications and nurture relationships with their
                    leads and clients. CRM software for small business replaces
                    the multitude of spreadsheets, databases and apps that many
                    businesses patch together to track client data. The result:
                    <b>
                      &nbsp; organization, efficiency, better time management
                      and impressed clients.
                    </b>
                  </p>
                </div>
                <div className="product__row-2">
                  <p>
                    Customer relationship management (CRM) is a technology for
                    managing all your company's relationships and interactions
                    with customers and potential customers. The goal is simple:
                    Improve business relationships to grow your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
