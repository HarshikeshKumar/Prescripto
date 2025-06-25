import React from "react";
import { assets } from "./../assets/assets";

const Banner = () => {
  return (
    <div>
      {/* ---------LEFT SIDE--------- */}
      <div>
        <div>
          <p>Book Appointment</p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button>Create account</button>
      </div>

      {/* ---------RIGHT SIDE--------- */}
      <div>
        <img src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
