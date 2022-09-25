

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import ProfileCard from "../components/ui/Profile-card/ProfileCard";
import img from "../assets/images/img-01.jpg";
import "../styles/profile.css";
import { FetchNFTClient } from '@audius/fetch-nft'
import React, { useEffect, useState } from 'react';



const fetchClient = new FetchNFTClient()
const Profile = () => {


    // Fetching all collectibles for the given wallets
    const [collectibles, setCollectibles] = useState(null)
    useEffect(() => {
      // Fetching all collectibles for the given wallets
      fetchClient.getCollectibles({
        ethWallets: ['0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9'],
        solWallets: ['GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY']
      }).then(res => setCollectibles(res))
    }, [])

    const item = {
      imgUrl: img,
      name: "Trista Francis",
    };
     
  return (

 

    <div>
      <CommonSection title="Profile" />
      <section className="profile-card-img"><ProfileCard item={item} /></section>
      <section className="userInfo">
        <div className="form__input">
                    <label htmlFor="">Name</label>
                    <input type="string"/>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">username</label>
                    <input></input>
                  </div>
                  
                  </section>
    
          <section>
          <Container >
          <Row>
         
          <div className="Header">
           <h5>Your Collectables</h5> 
            </div>
          {
        collectibles?.ethCollectibles['0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9']
          .map(collectible => (
         
                 <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <div className="Name">{collectible.name}</div>
              <img className="Image" src={collectible.frameUrl || collectible.gifUrl} alt={collectible.name} />
              </Col>
         
          ))    
        }
        </Row>
      </Container>
    </section>
        </div>

  );
}


export default Profile;
