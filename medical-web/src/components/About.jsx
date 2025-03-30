import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          At MediChain, we're driven by a passion for innovation and a
          commitment to building a safer, more transparent future. We leverage
          cutting-edge technologies, including artificial intelligence and
          blockchain, to develop solutions that tackle real-world challenges.
          Our team of experts combines deep industry knowledge with a
          forward-thinking approach, creating systems that are not only effective
          but also user-friendly. We believe in the transformative potential of
          technology to empower individuals and organizations, and we're
          dedicated to delivering solutions that make a meaningful impact.
        </p>
        <p className="text-justify lg:text-start">
          Our mission is to revolutionize the way we approach health and safety
          by providing innovative solutions that enhance trust and security in
          the pharmaceutical industry. We are committed to building a safer,
          more transparent future for all. We believe that everyone deserves
          access to safe and effective medications, and we are dedicated to
          making that a real. Our goal is to empower individuals and
          organizations with the tools and knowledge they need to make informed
          about their health choices.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
