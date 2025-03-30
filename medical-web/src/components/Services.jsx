import React from "react";
import Button from "../layouts/Button";
import { FaUserInjured } from "react-icons/fa";
import ServicesCard from "../layouts/ServicesCard";
import { MdLocalPharmacy } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <FaUserInjured size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdLocalPharmacy size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaIndustry size={35} className=" text-backgroundColor" />
  const icon4 = <FaUserMd size={35} className=" text-backgroundColor" />

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start max-w-2xl">
            We provide comprehensive healthcare solutions through our blockchain-based platform, 
            connecting patients, pharmacists, manufacturers, and doctors for seamless medical care.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard 
          icon={icon1} 
          title="Patient Services" 
          description="Access your medical records, track prescriptions, and connect with healthcare providers securely through blockchain technology."
        />
        <ServicesCard 
          icon={icon2} 
          title="Pharmacist Services" 
          description="Verify prescriptions, manage inventory, and process transactions with enhanced security and transparency."
        />
        <ServicesCard 
          icon={icon3} 
          title="Manufacturer Services" 
          description="Track product supply chain, ensure authenticity, and maintain quality control through blockchain verification."
        />
        <ServicesCard 
          icon={icon4} 
          title="Doctor Services" 
          description="Make your medical practice more efficient with our digital tools. Easily access patient records, write digital prescriptions, and provide online consultations. Track patient progress, share medical reports with specialists, and ensure secure communication with your patients."
        />
      </div>
    </div>
  );
};

export default Services;