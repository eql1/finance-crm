import React, { useState } from "react";

import "./dashboard.scss";

import PanelHeader from "../PanelHeader/PanelHeader";
import DataContainer from "../DataContainer/DataContainer";
import DataCanvas from "../DataCanvas/DataCanvas";
import TrailCard from "./TrailCard/TrailCard";

import { segmentsData, recommendedTrailsData } from "../../data/DasboardData";

const Dashboard = () => {
  const [segmentDataPosition, setSegmentDataPosition] = useState(0);

  return (
    <>
      <section className="dashboard">
        <div className="container">
          <div className="dashboard__content">
            <div className="dashboard__summary">
              <div className="dashboard__summary-info">
                <h1>Promotion Analysis</h1>
                <p>Automatic Private Sector Investing</p>
              </div>
              <div className="dashboard__summary-stats">
                <div className="dashboard__summary-item block">
                  <a className="dashboard__summary-ref">&#8599;</a>
                  <h2>132.151.123 </h2>
                  <h3>Net income</h3>
                </div>
                <div className="dashboard__summary-item block">
                  <h2>132.151.123</h2>
                  <a className="dashboard__summary-ref">&#8599;</a>

                  <h3>Total profit</h3>
                </div>
                <div className="dashboard__summary-item block">
                  <h2>132.151.123</h2>
                  <a className="dashboard__summary-ref">&#8599;</a>

                  <h3>Marketing expenses</h3>
                </div>
              </div>
            </div>
            <div className="dashboard__row">
              <DataContainer
                title="Population trend"
                optionalButtonText="Monthly"
              >
                <div className="dashboard__data">
                  <DataCanvas
                    data={segmentsData}
                    translateX={segmentDataPosition}
                  />
                  <button
                    onClick={() => {
                      setSegmentDataPosition((prev) => prev - 100);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setSegmentDataPosition((prev) => prev + 100);
                    }}
                  >
                    +
                  </button>
                </div>
              </DataContainer>

              <DataContainer title="Recommended trails">
                <div className="dashboard__trails">
                  {recommendedTrailsData.map((item, index) => (
                    <TrailCard item={item} key={index} />
                  ))}
                </div>
              </DataContainer>

              {/* <div className="block">
                <div className="block-header">
                  <div>
                    <h3>Population trend</h3>
                    <p>Updated 12 days ago</p>
                  </div>
                  <div>asudahu</div>
                </div>
              </div>
              <div className="block">asdad</div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
