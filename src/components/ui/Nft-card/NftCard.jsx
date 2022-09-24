import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nft-card.css";

import Modal from "../Modal/Modal";





const NftCard = (props) => {
 
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("Purchase")

  async function buyNFT(nft) {
    setMessage("Sold")
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    // const web3Modal = new Web3Modal()
    // const connection = await web3Modal.connect()
    // const provider = new ethers.providers.Web3Provider(connection)
    // const signer = provider.getSigner()
    // const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
  
    // /* user will be prompted to pay the asking process to complete the transaction */
    // const price = ethers.utils.parseUnits(nft.currentBid.toString(), 'ether')   
    // const transaction = await contract.createMarketSale(nft.tokenId, {
    //   value: price
    // })
    // await transaction.wait()
    // loadNFTs()
  }

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
         

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Current Price</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => buyNFT(props.item)}
            // onClick={() => setShowModal(true)}
          >
            <i class="ri-shopping-bag-line"></i> {message}
          </button>

          {/* {showModal && <Modal setShowModal={setShowModal} />} */}

          <span className="history__link">
            <Link to="#">View Provenance</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
