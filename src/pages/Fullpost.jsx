import React from "react";
import superman from "../assets/superman.png";
import spidey from "../assets/spidey.png";

const Fullpost = () => {
  return (
    <div className="container mx-auto text-white space-y-8">
      {/* body and image  */}
      <div className="flex space-x-3 mt-8">
        {/* image */}
        <div>
          <img src={spidey} alt="logo" width={50} />
        </div>
        {/* name and date */}
        <div>
          <p>Peter Parker</p>
          <p className="text-sm font-thin">Dec 1</p>
        </div>
      </div>
      {/* image and text container */}
      <div className="space-y-4">
        <img src={superman} alt="about" width={500} className="rounded-md" />
        <p className="text-4xl font-bold ">How to be a hero</p>
        <p
          className="w-3/4
        "
        >
          Origin: Created by the Anti-Monitor in order to facilitate his plans
          to feed on New Earth and the Multiverse. Co-Created by Sinestro to
          instill fear in the Universe and the Guardians of the Universe so that
          they would be forced to change the laws of the Book of Oa. Oath: In
          blackest day, in brightest night, Beware your fears made into light.
          Let those who try to stop what's right Burn like my power Sinestro's
          might!
        </p>
      </div>
    </div>
  );
};

export default Fullpost;
