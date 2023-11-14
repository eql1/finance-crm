import React from "react";

import "./panel.scss";
import PanelHeader from "../PanelHeader/PanelHeader";
import Dashboard from "../Dashboard/Dashboard";

const PanelPage = () => {
  return (
    <div className="panel-header__body">
      <div className="panel__header">
        <PanelHeader />
      </div>
      <div className="panel__dashboard">
        <Dashboard />
      </div>
    </div>
  );
};

export default PanelPage;
