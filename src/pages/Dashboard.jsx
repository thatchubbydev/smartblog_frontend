import React from "react";
import spidey from "../assets/spidey.png";
import hal from "../assets/hal.png";
import Modal from "../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <div className="container mx-auto space-y-8">
      {/* navbar */}
      <div className="flex justify-between mt-2 text-white hover:cursor-pointer">
        <p className="text-2xl">Smart Blog</p>
        {/* right div */}
        <div className="flex justify-evenly  w-1/4">
          <p>Home</p>
          <Link to={"/read"}>
            <p>Blog</p>
          </Link>

          {/* image */}
          <div className="flex space-x-1">
            <img src={spidey} width={25} height={10} alt="logo" />
            <p className="pt-1">Peter</p>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-4 py-1"
        >
          Create Post
        </button>
      </div>
      {/* body */}
      <div className="flex space-x-4 justify-between">
        {OpenModal && <Modal closeModal={setOpenModal} />}
        {/* left */}
        <div className="w-1/4">
          <img src={hal} alt="hal" />
        </div>
        {/* right */}
        <div className=" w-3/4 text-left pt-8 space-y-6 text-white">
          {/* date Blog */}
          <p className="text-sm">January 12,2022</p>
          {/* Title */}
          <p className="text-3xl font-semibold">How to be a green lantern</p>
          {/* blog body */}
          <p className="text-sm">
            Origin: In the early days of The Universe, natives of the
            overpopulated planet Maltus evolved into immortals of great power.
            They subsequently settled the planet Oa and declared themselves the
            Guardians of the Universe and enemies of evil after one of their own
            performed a forbidden experiment that had terrible consequences for
            the Universe at large. Oath: In brightest day, in blackest night, No
            evil shall escape my sight. Let those who worship evil's might
            Beware my power--Green Lantern's light!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex space-x-4 justify-between">
        {/* left */}
        <div className="w-1/4">
          <img src={spidey} alt="hal" />
        </div>
        {/* right */}
        <div className=" w-3/4 text-left pt-8 space-y-6 text-white">
          {/* date Blog */}
          <p className="text-sm">January 13,2022</p>
          {/* Title */}
          <p className="text-3xl font-semibold">How to be a Spider man</p>
          {/* blog body */}
          <p className="text-sm">
            Origin: In the early days of The Universe, natives of the
            overpopulated planet Maltus evolved into immortals of great power.
            They subsequently settled the planet Oa and declared themselves the
            Guardians of the Universe and enemies of evil after one of their own
            performed a forbidden experiment that had terrible consequences for
            the Universe at large. Oath: In brightest day, in blackest night, No
            evil shall escape my sight. Let those who worship evil's might
            Beware my power--Green Lantern's light!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
