import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./profile-card.css";

import Modal from "../Modal/Modal";

const ProfileCard = (props) => {
  const { creatorImg, imgUrl, name } = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="circular--square">
        <img src={imgUrl} alt="" />
      </div>

         <div className=" mt-3 d-flex align-items-center justify-content-between">

          {showModal && <Modal setShowModal={setShowModal} />}

        </div> 
      </div>
   
  );
};

export default ProfileCard;
