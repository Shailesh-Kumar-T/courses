import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              Our courses are designed and taught by industry experts who 
              have years of experience in their respective fields.You can be assured that the information you receive is up-to-date and relevant.<br />
              Our online courses are flexible, allowing you to learn at your own pace and on your own schedule.Our courses are accessible 
              to anyone with an internet connection, making education available to a wider audience.<br /> You can learn from anywhere in the world, 
              at any time.Our courses are designed to be interactive and engaging, with a range of multimedia resources to support your learning.
              We believe that education should be affordable and accessible to all, and we strive to make this a reality through our online courses.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/ZxKM3DCV2kE"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
