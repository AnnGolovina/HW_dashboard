import React from "react";
import { styled } from "styled-components";
import { Flex, FlexColumn, FlexRow } from "./Flex";
import { Link } from "react-router-dom";

export const LandingView = styled(FlexColumn)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  background-image: url(/assets/Header_img.png);
  overflow-x: hidden;
`;

export const HeaderView = styled(FlexRow)`
  position: absolute;
  background-color: transparent;
  color: white;
  font-family: "Acme", sans-serif;
  font-family: "Chakra Petch", sans-serif;
  font-family: "Montserrat", sans-serif;
  font-family: "Catamaran", sans-serif;

   .see-up {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: normal;
  }
`;

export const RightLinks = styled(Flex)`
    justify-content: space-between;
    margin: 40px 40px 80px auto;

    a {
    color: #fff;
    font-weight: 500;
    line-height: normal;
    font-size: 28px;
    text-decoration: none;
    margin-right: 60px;
  }

  .burger-menu {
    filter: invert(100%);
  }

`

export const TitleInfo = styled(FlexColumn)`
  @import url("https://fonts.googleapis.com/css2?family=Acme&family=Catamaran&family=Chakra+Petch:ital,wght@0,400;1,500&family=Manrope&family=Tektur:wght@500&display=swap");

  color: white;
  font-family: "Manrope", sans-serif;
  line-height: normal;
  font-style: normal;

  .title {
    color: white;
    font-size: 118px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .title-text {
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    width: 800px;
    text-align: center;
  }

  button {
    width: 200px;
    margin-top: 60px;
    font-family: "Manrope", sans-serif;
    flex-shrink: 0;
    border: 2px solid #fff;
    background: #000;
    height: 70px;
    letter-spacing: 1.44px;
    font-weight: 700;
    color: #fff;
  }
`;

export const MainInfo = styled(FlexRow)`
  @import url("https://fonts.googleapis.com/css2?family=Acme&family=Catamaran&family=Chakra+Petch:ital,wght@0,400;1,500&family=Manrope&family=Tektur:wght@500&display=swap");

  width: 95%;
  margin: 20px 40px;
  justify-content: space-between;
  flex-wrap: nowrap;
  line-height: normal;
  font-style: normal;
  font-family: 'Manrope', sans-serif;
  overflow-x: hidden;

  & img {
    width: 500px;
    position: absolute;
    z-index: 3;
    top: -50px;
    right: 30px;
  }

  figure {
    text-align: start;
    margin: 20px;
    padding: 0;
  }

  h3 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 1.44px;
    text-align: start;
    margin: 30px;
  }

  p {
    width: 420px;
    margin: 50px 30px 20px;
    line-height: 50px;
    font-weight: 400;
    font-size: 26px;
  }

  .historical-p {
    width: 550px;
  }
`

export const Reviews = styled(FlexRow)`
    .review-card {
    margin: 0 40px;
  }

  .user-name {
    margin:10px 0 10px 20px ;
    color: white;
    color: #FFF;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1.08px;
  }

  .review-1user {
    position: absolute;
    color: #FFF;
    width: 75%;
    top: 140px;
    right: 80px;
    margin-left:20px;
    font-family: "Acme", sans-serif;
    font-family: "Montserrat", sans-serif;
    font-family: "Catamaran", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    font-family: "Chakra Petch", sans-serif;

  }
  
`

export const Stars = styled(FlexRow)`
    justify-content: start;
    margin-top: 0;
    margin-left: 18px;

    img {
      margin-right: 7px;
    }
`

export const ViewBookTour = styled(Flex)`
  position: relative;
  background-image: url("/assets/footer_img.png");
  width: 100%;
  height: 1300px;
  margin-top: 200px;
`

export const FormBookTour = styled(FlexRow)`
  position: absolute;
  top: 250px;
  left: 170px;
  width: 80%;
  height: 600px;

  p {
    width: 35%;
    color: white;
    font-family: "Acme", sans-serif;
    font-family: "Montserrat", sans-serif;
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.03em;
    text-align: left;
    font-size: 40px;

  }
`

export const Forms = styled(FlexColumn)`
    position: absolute;
    width: 450px;
    height: 450px;
    background: #dadada9e;
    right: 20px;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    

    select {
      gap: 20px;
      width: 300px;
      height: 70px;
      font-size: 20px;
      background: #dadada7a;
      color: white;
      text-align: center;
      border: 2px solid white;
      font-family: Manrope;
    }

    button {
      margin: 30px;
      width: 300px;
      height: 70px;
      font-family: Manrope;
      background: black;
      color: white;
      border: 2px solid white;
    }
`

export const Footer = styled(FlexRow)`
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 300px;
      background: black;
      color: white;
      align-items: center;
      justify-content: space-around;

      .see-up {
    width: 15%;
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: normal;
  }

`

export const Contacts = styled(FlexColumn)`
    font-family: "Acme", sans-serif;
    font-family: "Montserrat", sans-serif;
    font-family: "Catamaran", sans-serif;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    font-size: 26px;
    align-items: center;
    justify-content: center;
    
    h2, p {
      margin: 10px;
    }

`
export const SocialNetworks = styled(FlexRow)`
    width:15%;
    align-items: center;
    justify-content: space-around;
`