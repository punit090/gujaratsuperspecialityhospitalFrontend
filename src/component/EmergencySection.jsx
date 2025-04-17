import React from "react";
import { FaAmbulance } from "react-icons/fa";

const EmergencySection = () => {
  return (
    <React.Fragment>
      <div className="emergencySection">
        <div className="emergencySectionIcon">
          <FaAmbulance />
        </div>
        <h3 className="emergencyTitle">Emergency Care Services</h3>
        <h4 className="emergencySubTitle">Call To Get Assisted Now</h4>
        <h2 className="callTitle">+91-96870 79991</h2>
      </div>
    </React.Fragment>
  );
};

export default EmergencySection;
