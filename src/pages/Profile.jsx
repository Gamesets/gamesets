import React, {} from "react";
import { Avatar } from 'react-profile-avatar'
import avatar from '../assets/images/supermodel-bella-hadid.png'
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Profile = () => {
  
  return (
    <>
      <CommonSection title="Profile" />
              <Avatar 
                imageSrc={avatar}
                size={100}
              />
        <h3 style={{color: "white"}}>Bella Hadid</h3>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Profile;
