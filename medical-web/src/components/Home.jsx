import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Welcome to our pharmacy website, where your health is our top priority.
          We are  your  shield against counterfit medicines by protecting you all from fake and harmful medications.
          Explore a wide range of medications, expert advice, and personalized
          care to support your well-being. Discover a healthier you with us!
        </p>

        <Link to="services" spy={true} smooth={true} duration={500}>
          <Button title="See Services" />
        </Link>
      </div>
    </div>
  );
};

export default Home;