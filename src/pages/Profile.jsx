

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";

import "../styles/profile.css";
import { FetchNFTClient } from '@audius/fetch-nft'
import React, { useEffect, useState } from 'react';



const fetchClient = new FetchNFTClient()
const Profile = () => {
    
     <>
     <CommonSection title="Profile" />
     </>


    // Fetching all collectibles for the given wallets
    const [collectibles, setCollectibles] = useState(null)
    useEffect(() => {
      // Fetching all collectibles for the given wallets
      fetchClient.getCollectibles({
        ethWallets: ['0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9'],
        solWallets: ['GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY']
      }).then(res => setCollectibles(res))
    }, [])


     
  return (

 

    <section>
        <Container>
        <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                <div className="form__input">
                    <label htmlFor="">Name</label>
                    <input type="number" placeholder="NAME GOES HERE" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Upload profile pic</label>
                    <input type="file" className="upload__input" />
                  </div>
                </form>
            </div>
            </Col>
          </Container>

          <Container>
    <div className="nfts">
      <div className="Header">Eth Collectibles</div>
      {
        collectibles?.ethCollectibles['0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9']
          .map(collectible => (
            <div className="Collectibles">
              <div className="Name">{collectible.name}</div>
              <img className="Image" src={collectible.frameUrl || collectible.gifUrl} alt={collectible.name} />
            </div>
          ))    
        }
          </div>
          </Container>

    </section>

  );
}


export default Profile;
