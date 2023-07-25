import React from "react";
import { SideMenu } from "./Sidebar";
import { Link } from "react-router-dom";

export default function Agentside(a, b) {
  const ViewSide = SideMenu.map((item) => (
    <Link to={b == 1 ? `/Agent` : `/AgentManage/${item.name}`}>
      <div className="AgentSideTab">{item.name}</div>
    </Link>
  ));
  return (
    <div>
      <div className="fixedSide">{ViewSide}</div>
    </div>
  );
}
