import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios';
import NFTCollection from './NFTCollection.json';
import { Card, Container, Text, Grid, Button, Image } from '@nextui-org/react';
import { nftContract, key, displayAmount, mainnet } from './settings';
import { Network, Alchemy } from "alchemy-sdk";




export default function NftPuller() {


  // Github: https://github.com/alchemyplatform/alchemy-sdk-js
// Setup: npm install alchemy-sdk
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "bYm06cEEx4W_Evcq4Ed_cCHRfAFGbJO6", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Print the NFT floor price for a contract


  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    generateNft();
    }, [setNfts])
    
    async function refreshPage() {
        window.location.reload();
    }
    
      const generateNft = async () => {
      const provider = new ethers.providers.JsonRpcProvider(mainnet)
      const wallet = new ethers.Wallet(key, provider);
      
    
      const nftArray= [ '0xA03e357A09E761E8d486A1419c74bf42e8D1B064','0xd2a3c8f95daaed4ae824dd1f7441ff1f061124d6' ]
      const itemArray = [];
      for (let i = 0; i < nftArray.length; i++) 
      {

      const contract = new ethers.Contract(nftArray[i], NFTCollection, wallet);
      //FLOOR PRICE CALL HERE
      
      // console.log("FLAG" ,floorPrice)
      
      // .then(console.log);

      const floorPrice = await alchemy.nft.getFloorPrice(nftArray[i]); 

      console.log("New logger", floorPrice);

      // items loop
      contract.totalSupply().then(result => {
        let totalSup = parseInt(result, 16)
  
        var fp = 9;
      // const floorPrice = async alchemy.nft.getFloorPrice(nftArray[i]).then( (a) => {
      //                     console.log(a)
      //                     fp = a.looksRare.floorPrice
      //                     console.log("Maree log", fp)
      //                   })

      
      
      
      // ( (a) => {
      //   console.log(a)
      //   fp = a.looksRare.floorPrice
      //   console.log("Maree log", fp)
      // })

        /*
        Replace "displayAmount" with "totalSup"
        below if you want to display all NFTs 
        in the collection BUT BE CAREFUL, it will render
        every nft image and possibly freeze your server/browser!!
        */
        for (let i = 0; i < displayAmount; i++) {

          var token = i + 1                         
          const owner = contract.ownerOf(token)
          const rawUri = contract.tokenURI(token)
        
  

          const Uri = Promise.resolve(rawUri)
          const getUri = Uri.then(value => {
            let str = value
            let cleanUri = str.replace('ipfs://', 'https://ipfs.io/ipfs/')
            let metadata = axios.get(cleanUri).catch(function (error) {
              console.log(error.toJSON());
            });
            return metadata;
          })

    
          getUri.then(value => {
            let rawImg = value.data.image
            var name = value.data.name
            var desc = value.data.description
            var tokenType = value.data.tokenType     
            let image = rawImg.replace('ipfs://', 'https://ipfs.io/ipfs/')
            Promise.resolve(owner).then(value => {
              let ownerW = value;
              let meta = {
                name: name,
                img: image,
                tokenId: token,
                wallet: ownerW,
                desc,
                tokenType: tokenType,
                floorPrice:  floorPrice.looksRare.floorPrice
              }
              console.log("meta" , meta)
              itemArray.push(meta)
            })
          })
        }
      })

    }
      await new Promise(r => setTimeout(r, 5000));
      setNfts(itemArray)
      setLoadingState('loaded');
    }

if (loadingState === 'loaded' && !nfts.length)

    return (
      <div >
        {
        nfts.map((nft, i) => {
          <div>
          <Card.Image src={nft.img} key={i}/>
        <h2>No Collections Retrieved</h2>
        </div>
})}
      </div>
    )
    return (
      <Container md>
        <Text h1 css={{marginLeft:'$10'}} size={'40px'}>NFT Collection</Text>
        <Button css={{marginLeft: '$10'}} onPress={refreshPage}>Refresh NFTs</Button>
      <Grid.Container gap={3}>
        {nfts.map((nft, i) => {
            return (
              <Grid >
                <a>
                  <Card isHoverable key={i} css={{ mw: "270px", marginRight: '$1', boxShadow:'0px 2px 12px #000000' }} variant="bordered">
                    <Card.Image src={nft.img} />
                    <Card.Body md css={{background:"$gradient"}}>
                    <Text css={{color:'$white'}} h2>{nft.name}</Text>
                    <Text h3 css={{color:'$white'}}>NFT ID: {nft.tokenId}</Text>
                    <Text css={{color:'$white'}}>{nft.desc}</Text>
                    <Text h3 css={{color:'$white'}}> Price:{nft.floorPrice}</Text>

                    

                    </Card.Body>
                  </Card>
                </a>
              </Grid>
            )
          })}
      </Grid.Container>
    </Container>
    )
}