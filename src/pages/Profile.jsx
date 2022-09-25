
import { Avatar } from 'react-profile-avatar'
import avatar from '../assets/images/supermodel-bella-hadid.png'
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import '../styles/Profile.css'
import { FetchNFTClient } from '@audius/fetch-nft'



import React, { useEffect, useState } from 'react';

const Profile = () => {

  const fetchClient = new FetchNFTClient()



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
  <div>
      <CommonSection title="Profile" />
      <section className="user">
              <Avatar 
                imageSrc={avatar}
                size={100}
              />
          </section>
     
     return (
    <div className="App">
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
    </div>

  );
    }

    

export default Profile;