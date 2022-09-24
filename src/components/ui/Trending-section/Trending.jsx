import React from "react";
import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../../../assets/data/data";
import "./trending.css";

import Nftpuller from '../../../n2dpuller/nftpuller'

const axios = require("axios");
const Trending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">Trending</h3>
          </Col>
          <Nftpuller/>
        </Row>
      </Container>
    </section>
  );
};

export default Trending;