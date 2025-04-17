"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "@/component/Breadcrumb";
import IcuSection from "@/component/IcuSection";
import ICU from "@/assets/img/ICU-Icon-A.png";
import Patient from "@/assets/img/Patient-Counselling-Icon.png";
import Rooms from "@/assets/img/Rooms-Icon.png";
import OperationTheatre from "@/assets/img/Operation-Theater-Icon.png";
import DialysisCenter from "@/assets/img/Dialysis-Center-Icon.png";
import EquipmentFacilities from "@/assets/img/monitoring-Icon.png"

const AmenitiesPage = () => {
  return (
    <>
      <Breadcrumb Title="Amenities" />
      <div className="amenitiesMainDiv">
        <Container>
          <IcuSection
            Img={ICU}
            Title="   Intensive Care Unit (ICU)"
            subTitle="Intensive Care Unit (ICU)"
            description="Intensive Care Unit (ICU) to provide comprehensive care to critically ill patients with enhanced capacity for monitoring."
          />
          <IcuSection
            Img={Patient}
            Title="Patient Counselling Areas"
            subTitle="Intensive Care Unit (ICU)"
            description="Intensive Care Unit (ICU) to provide comprehensive care to critically ill patients with enhanced capacity for monitoring."
          />
          <IcuSection
            Img={Rooms}
            Title="Rooms"
            subTitle="Intensive Care Unit (ICU)"
            description="Intensive Care Unit (ICU) to provide comprehensive care to critically ill patients with enhanced capacity for monitoring."
          />
          <IcuSection
            Img={OperationTheatre}
            Title="Operation Theatre"
            subTitle="Intensive Care Unit (ICU)"
            description="Intensive Care Unit (ICU) to provide comprehensive care to critically ill patients with enhanced capacity for monitoring."
          />
          <IcuSection
            Img={DialysisCenter}
            Title="Dialysis Center"
            subTitle="Intensive Care Unit (ICU)"
            description="Intensive Care Unit (ICU) to provide comprehensive care to critically ill patients with enhanced capacity for monitoring."
          />
          <IcuSection
            Img={EquipmentFacilities}
            Title="Equipment and Facilities"
            subTitle="Intensive Care Unit (ICU)"
            description="Intensive Care Unit (ICU) to provide comprehensive care to critically ill patients with enhanced capacity for monitoring."
          />
        </Container>
      </div>
    </>
  );
};

export default AmenitiesPage;
