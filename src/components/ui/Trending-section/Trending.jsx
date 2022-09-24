import React from "react";
import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../../../assets/data/data";
import "./trending.css";

import NftCard from "../Nft-card/NftCard";

const axios = require("axios");


const getGamingNFTs = async () => {
  console.log("hello")
  try {
    const response = await axios.get(
      "https://api.opensea.io/api/v1/collection/gods-unchained-collectibles"
    );
    // const newToDoList = [...toDoList, {"id": 3, ...}]

    console.log("response  ", response.data.collection);
    // console.log("response  ", response.data.collection.primary_asset_contracts.slice(0, 4));

    return response.data;

  } catch (error) {
    console.log(error)
    return [];
  }
};
const Trending = () => {
  // componentDidMount() {
  //   getGamingNFTs()
  //   // setTimeout(() => {
  //   // this.setState({
  //   // isLoading: false,
  //   // status: "Completed!"
  //   // });
  //   // }, 2000);
  //   }
  const gamingAssets = getGamingNFTs()

  // object -> data -> collection -> primary_asset_contracts[...]
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">Trending</h3>
          </Col>
          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
          {/* {gamingAssets.slice(0, 8).map((item.data.collection.primary_asset_contracts) => (
            <Col lg="3" md="4" sm="6" key={item.image_url} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
