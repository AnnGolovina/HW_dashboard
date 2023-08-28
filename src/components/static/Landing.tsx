import React from "react";
import { Flex, FlexColumn, FlexRow } from "../shared/Flex";
import { Form, Link } from "react-router-dom";
import {
  FormBookTour,
  HeaderView,
  LandingView,
  MainInfo,
  Reviews,
  RightLinks,
  Stars,
  TitleInfo,
  ViewBookTour,
  Forms,
  Footer,
  Contacts,
  SocialNetworks,
} from "../shared/Landing.styled";
import { styled } from "styled-components";
import { ScrollTopContextProvider, ScrollPoint, Link as ScrollLink } from "react-use-scroll-to";

const StyledLandingView = styled(LandingView)``;

const StyleHeaderView = styled(HeaderView)``;

const StyleTitleInfo = styled(TitleInfo)``;

const StyleMainInfo = styled(MainInfo)`
  .rectangle {
    position: relative;
    width: 500px;
    height: 400px;
    margin: 70px;
    background: lightgrey;
  }
`;

const StyledReviews = styled(Reviews)`
  .img-user {
    top: 40px;
    left: 80px;
  }
`;

const StyledStars = styled(Stars)``;

const StyledViewBookTour = styled(ViewBookTour)``;

const StyledFormBookTour = styled(FormBookTour)``;

const StyleForms = styled(Forms)``;

const StyledFooter = styled(Footer)``;

const StyledContacts = styled(Contacts)``;

const StyledSocialNetworks = styled(SocialNetworks)``;

export const Landing = () => {
  return (

    <ScrollTopContextProvider>
    <FlexColumn width="100%" minWidth="865px" overflowX="hidden">
      <StyledLandingView width="100%" height="1020px">
        <StyleHeaderView
          as="header"
          width="100%"
          padding="10px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex margin="40px 40px auto 80px" color="white">
            <Link className="see-up" to="/login">
              SeeUp
            </Link>
          </Flex>

          <RightLinks className="right-links">
            <Link to=""><ScrollLink elementTag="about-us">About Us</ScrollLink></Link>
            <Link to=""><ScrollLink elementTag="tours">Tours</ScrollLink></Link>
            <Link to=""><ScrollLink elementTag="contacts">Contacts</ScrollLink></Link>
            <Link to="">
              <img
                className="burger-menu"
                src="/assets/burger-menu.png"
                width={"40px"}
                alt="menu"
              />
            </Link>
          </RightLinks>
        </StyleHeaderView>


        <StyleTitleInfo alignItems="center" margin="170px auto 0">
          
        <ScrollPoint tag="about-us"><h1 className="title">Montenegro</h1></ScrollPoint>
          <p className="title-text">
            Welcome to magical Montenegro: where the blue Adriatic waves lap the
            mountain peaks and cultural treasures have long beckoned travelers.
            Go on an unforgettable journey with us!
          </p>
          <button>Let's go!</button>
          
        </StyleTitleInfo>
      </StyledLandingView>

      <FlexColumn
        width="100%"
        margin="40px 20px"
        justifyContent="space-between"
        alignItems="strech"
        overflowX="hidden"
      >
        
        <StyleMainInfo>
        
          <div className="img-card">
            <figure>
              <figcaption>
              <ScrollPoint tag="tours"> <h3>What we offer</h3></ScrollPoint>
                <p>
                  The incredible landscapes of Montenegro are a fairy-tale world
                  of natural beauty.
                </p>
              </figcaption>
              <div className="rectangle">
                <img src="/assets/1_img.png" alt="1_img" width={"500px"} />
              </div>
            </figure>
          </div>

          <div>
            <figure>
              <div className="rectangle">
                <img src="/assets/2_img.png" alt="2_img" width={"500px"} />
              </div>
              <figcaption>
                <p>
                  Mountain lakes, waterfalls, green valleys and clean beaches -
                  all this awaits you. Feel the harmony with nature.
                </p>
              </figcaption>
            </figure>
          </div>
        </StyleMainInfo>
        

        <StyleMainInfo>
          <div className="img-card">
            <figure>
              <figcaption>
                <p>
                  Delicious local cuisine Montenegro is famous for its unique
                  cuisine. Try dishes made from local products and enjoy
                  authentic flavors.
                </p>
              </figcaption>
              <div className="rectangle">
                <img src="/assets/3_img.png" alt="3_img" width={"500px"} />
              </div>
            </figure>
          </div>

          <div>
            <figure>
              <div className="rectangle">
                <img src="/assets/4_img.png" alt="4_img" width={"500px"} />
              </div>
              <figcaption>
                <p className="historical-p">
                  Historical assets Ancient cities, castles and fortresses will
                  tell you the history of Montenegro. You will immerse yourself
                  in the feeling of the past and discover the secrets of this
                  unique country
                </p>
              </figcaption>
            </figure>
          </div>
        </StyleMainInfo>

        <FlexRow
          width="85%"
          alignItems="center"
          justifyContent="space-between"
          margin="50px 100px 10px"
        >
          <h2>Reviews</h2>
          <Link to="/login">
            <img src="/assets/arrow.png" alt="arrow" width={"30px"} />
          </Link>
        </FlexRow>

        <StyledReviews
          overflowX="hidden"
          width="95%"
          alignItems="stretch"
          justifyContent="space-between"
        >
          <FlexColumn
            position="relative"
            margin="0 20px 0 60px"
            overflowX="hidden"
          >
            <div className="review-card">
              <img
                src="/assets/Rewiews_img.png"
                alt="Rewiews_img"
                width={"620px"}
                height={"400px"}
              />

              <p className="review-1user">
                I have always dreamed of seeing the Adriatic coast and this tour
                exceeded all my expectations. Visiting mountain lakes and beach
                areas was an unparalleled experience. Best of all, the tour was
                well planned and the local food left an unforgettable taste
              </p>
              <div>
                <Flex className="img-user" position="absolute">
                  <img
                    src="/assets/User1_img.png"
                    alt="User1_img"
                    width={"100px"}
                  />

                  <FlexColumn position="relative">
                    <p className="user-name">Pedro Fabia</p>
                    <StyledStars>
                      <img src="/assets/star.png" alt="star" width={"20px"} />
                      <img src="/assets/star.png" alt="star" width={"20px"} />
                      <img src="/assets/star.png" alt="star" width={"20px"} />
                      <img src="/assets/star.png" alt="star" width={"20px"} />
                      <img src="/assets/star.png" alt="star" width={"20px"} />
                    </StyledStars>
                  </FlexColumn>
                </Flex>
              </div>
            </div>
          </FlexColumn>

          <FlexColumn
            position="relative"
            margin="0 20px 0 20px"
            overflowX="hidden"
          >
            <div className="review-card">
              <img
                src="/assets/Rewiews_img.png"
                alt="Rewiews_img"
                width={"620px"}
                height={"400px"}
              />
              <p className="review-1user">
                My trip to Montenegro was unforgettable! From mountain scenery
                to enchanting beaches, this tour had it all. Especially
                memorable were the visits to ancient cities, where the
                atmosphere of ancient times was felt. The guides were very
                professional and friendly, they made me feel at home
              </p>
              <Flex className="img-user" position="absolute">
                <img src="/assets/User2_img.png" alt="User_2" width={"100px"} />

                <FlexColumn position="relative">
                  <p className="user-name">Ivan Vaseva</p>

                  <StyledStars>
                    <img src="/assets/star.png" alt="star" width={"20px"} />
                    <img src="/assets/star.png" alt="star" width={"20px"} />
                    <img src="/assets/star.png" alt="star" width={"20px"} />
                    <img src="/assets/star.png" alt="star" width={"20px"} />
                    <img src="/assets/star.png" alt="star" width={"20px"} />
                  </StyledStars>
                </FlexColumn>
              </Flex>
            </div>
          </FlexColumn>
        </StyledReviews>
      </FlexColumn>

      <StyledViewBookTour>
        <StyledFormBookTour alignItems="stretch" justifyContent="space-between">
          <p>
            Don't waste time - choose the best for your trip to Montenegro with
            us. Plan your adventure today!
          </p>

          <StyleForms>
            <select>
              <option value="SELECT TOUR">SELECT TOUR</option>
            </select>
            <select>
              <option value="SELECT DATE">SELECT DATE</option>
            </select>
            <select>
              <option value="NUMBER OF GUESTS">NUMBER OF GUESTS</option>
            </select>
            <button>BOOK TOUR</button>
          </StyleForms>
        </StyledFormBookTour>
        <StyledFooter>

          <Link className="see-up" to="/login">
            SeeUp
          </Link>

          <StyledContacts>
            <ScrollPoint tag="contacts"><h2>Contacts</h2></ScrollPoint>
            <p>montenegrotour@gmail.com</p>
            <p>+7 897 897 897 99</p>
          </StyledContacts>

          <StyledSocialNetworks>
            <Link to={""}><img src="/assets/Instagram_vector.png" alt="instagram" /></Link>
            <Link to={""}><img src="/assets/F_vector.png" alt="fb" /></Link>
            <Link to={""}><img src="/assets/IN_vector.png" alt="in" /></Link>
          </StyledSocialNetworks>
        </StyledFooter>
      </StyledViewBookTour>
    </FlexColumn>

    </ScrollTopContextProvider>
  );
};
